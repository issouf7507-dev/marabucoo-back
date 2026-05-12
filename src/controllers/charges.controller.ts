import type { Request, Response } from 'express';
import { z } from 'zod';
import { prisma } from '../lib/prisma.js';

const chargeSchema = z.object({
  libelle: z.string().min(1),
  categorie: z.enum(['RH', 'EXPLOIT', 'UTIL', 'VAR']),
  nature: z.string().optional(),
  type: z.string().optional(),
  periodicite: z.string().optional(),
  budget: z.number().min(0).optional(),
  obs: z.string().optional(),
});

export async function getAll(_req: Request, res: Response): Promise<void> {
  const charges = await prisma.charge.findMany({
    include: { realisations: true },
    orderBy: { libelle: 'asc' },
  });
  res.json(charges);
}

export async function create(req: Request, res: Response): Promise<void> {
  const parsed = chargeSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: 'Données invalides', errors: parsed.error.flatten() });
    return;
  }
  const charge = await prisma.charge.create({ data: parsed.data });
  res.status(201).json(charge);
}

export async function update(req: Request, res: Response): Promise<void> {
  const parsed = chargeSchema.partial().safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: 'Données invalides' });
    return;
  }
  const charge = await prisma.charge.update({
    where: { id: Number(req.params.id) },
    data: parsed.data,
  });
  res.json(charge);
}

export async function remove(req: Request, res: Response): Promise<void> {
  await prisma.charge.delete({ where: { id: Number(req.params.id) } });
  res.status(204).send();
}

export async function upsertReel(req: Request, res: Response): Promise<void> {
  const chargeId = Number(req.params.id);
  const { mois, annee = new Date().getFullYear(), montant, statut, datePmt } = req.body;

  const reel = await prisma.chargeReel.upsert({
    where: { chargeId_mois_annee: { chargeId, mois, annee } },
    update: { montant, statut, datePmt: datePmt ? new Date(datePmt) : undefined },
    create: { chargeId, mois, annee, montant, statut },
  });
  res.json(reel);
}
