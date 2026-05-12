import type { Request, Response } from 'express';
import { z } from 'zod';
import { prisma } from '../lib/prisma.js';

const trancheInputSchema = z.object({
  montant:  z.number().min(0),
  echeance: z.string().min(1, "L'échéance est requise"),
});

const factureSchema = z.object({
  missionId: z.number().int().min(1),
  num:       z.string().min(1, 'Le numéro est requis'),
  date:      z.string().min(1, 'La date est requise'),
  ht:        z.number().min(0),
  tvaType:   z.enum(['exo', '18']),
  tranches:  z.array(trancheInputSchema).min(1),
});

const trancheUpdateSchema = z.object({
  encaisse: z.number().min(0),
  dateEnc:  z.string().optional(),
  ref:      z.string().optional(),
  statut:   z.string().optional(),
});

function computeTva(ht: number, tvaType: string) {
  const tvaMontant = tvaType === '18' ? Math.round(ht * 0.18) : 0;
  return { tvaMontant, ttc: ht + tvaMontant };
}

const INCLUDE = {
  mission: { select: { id: true, nom: true, client: true } },
  tranches: { orderBy: { num: 'asc' as const } },
};

export async function getAll(_req: Request, res: Response): Promise<void> {
  const factures = await prisma.facture.findMany({
    include: INCLUDE,
    orderBy: { date: 'desc' },
  });
  res.json(factures);
}

export async function getOne(req: Request, res: Response): Promise<void> {
  const facture = await prisma.facture.findUnique({
    where: { id: Number(req.params.id) },
    include: INCLUDE,
  });
  if (!facture) { res.status(404).json({ message: 'Facture introuvable' }); return; }
  res.json(facture);
}

export async function create(req: Request, res: Response): Promise<void> {
  const parsed = factureSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: 'Données invalides', errors: parsed.error.flatten() });
    return;
  }
  const { tranches, date, ht, tvaType, ...rest } = parsed.data;
  const { tvaMontant, ttc } = computeTva(ht, tvaType);

  const facture = await prisma.facture.create({
    data: {
      ...rest, ht, tvaType, tvaMontant, ttc,
      date: new Date(date),
      tranches: {
        create: tranches.map((t, i) => ({
          num:      i + 1,
          montant:  t.montant,
          echeance: new Date(t.echeance),
        })),
      },
    },
    include: INCLUDE,
  });
  res.status(201).json(facture);
}

export async function update(req: Request, res: Response): Promise<void> {
  const { date, ht, tvaType } = req.body as { date?: string; ht?: number; tvaType?: string };
  const data: Record<string, unknown> = { ...req.body };
  if (date) data.date = new Date(date);
  if (ht !== undefined && tvaType !== undefined) {
    const { tvaMontant, ttc } = computeTva(ht, tvaType);
    data.tvaMontant = tvaMontant;
    data.ttc = ttc;
  }
  const facture = await prisma.facture.update({
    where: { id: Number(req.params.id) },
    data,
    include: INCLUDE,
  });
  res.json(facture);
}

export async function remove(req: Request, res: Response): Promise<void> {
  await prisma.facture.delete({ where: { id: Number(req.params.id) } });
  res.status(204).send();
}

export async function updateTranche(req: Request, res: Response): Promise<void> {
  const parsed = trancheUpdateSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: 'Données invalides' });
    return;
  }
  const { dateEnc, ...rest } = parsed.data;

  // 1. Mettre à jour la tranche
  const tranche = await prisma.tranche.update({
    where: { id: Number(req.params.tid) },
    data: { ...rest, dateEnc: dateEnc ? new Date(dateEnc) : null },
    include: { facture: { select: { missionId: true } } },
  });

  // 2. Recalculer l'avance de la mission = somme de toutes les tranches encaissées
  const missionId = tranche.facture.missionId;
  const result = await prisma.tranche.aggregate({
    where: { facture: { missionId } },
    _sum: { encaisse: true },
  });
  const nouvelleAvance = result._sum.encaisse ?? 0;

  await prisma.mission.update({
    where: { id: missionId },
    data: { avance: nouvelleAvance },
  });

  res.json(tranche);
}
