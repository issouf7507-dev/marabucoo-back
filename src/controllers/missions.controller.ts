import type { Request, Response } from 'express';
import { z } from 'zod';
import { prisma } from '../lib/prisma.js';

const missionSchema = z.object({
  nom: z.string().min(1),
  client: z.string().min(1),
  apporteur: z.string().optional(),
  statut: z.enum(['PROSPECT', 'TDR', 'PROPALE', 'CONTRAT', 'EN_COURS', 'TERMINE', 'PERDU']).optional(),
  montant: z.number().min(0).optional(),
  avance: z.number().min(0).optional(),
  debut: z.string().optional(),
  fin: z.string().optional(),
  tva: z.string().optional(),
  nature: z.string().optional(),
  desc: z.string().optional(),
});

export async function getAll(_req: Request, res: Response): Promise<void> {
  const missions = await prisma.mission.findMany({
    include: { encaissements: true },
    orderBy: { createdAt: 'desc' },
  });
  res.json(missions);
}

export async function getOne(req: Request, res: Response): Promise<void> {
  const mission = await prisma.mission.findUnique({
    where: { id: Number(req.params.id) },
    include: { encaissements: true, factures: { include: { tranches: true } } },
  });
  if (!mission) {
    res.status(404).json({ message: 'Mission introuvable' });
    return;
  }
  res.json(mission);
}

export async function create(req: Request, res: Response): Promise<void> {
  const parsed = missionSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: 'Données invalides', errors: parsed.error.flatten() });
    return;
  }
  const { debut, fin, ...rest } = parsed.data;
  const mission = await prisma.mission.create({
    data: {
      ...rest,
      debut: debut ? new Date(debut) : undefined,
      fin:   fin   ? new Date(fin)   : undefined,
    },
  });
  res.status(201).json(mission);
}

export async function update(req: Request, res: Response): Promise<void> {
  const parsed = missionSchema.partial().safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: 'Données invalides' });
    return;
  }
  const { debut, fin, ...rest } = parsed.data;
  const mission = await prisma.mission.update({
    where: { id: Number(req.params.id) },
    data: {
      ...rest,
      ...(debut !== undefined ? { debut: new Date(debut) } : {}),
      ...(fin   !== undefined ? { fin: fin ? new Date(fin) : null } : {}),
    },
  });
  res.json(mission);
}

export async function remove(req: Request, res: Response): Promise<void> {
  await prisma.mission.delete({ where: { id: Number(req.params.id) } });
  res.status(204).send();
}

export async function updateEnc(req: Request, res: Response): Promise<void> {
  const missionId = Number(req.params.id);
  const enc: Record<string, number> = req.body;

  await Promise.all(
    Object.entries(enc).map(([mois, montant]) =>
      prisma.missionEnc.upsert({
        where: { missionId_mois: { missionId, mois } },
        update: { montant },
        create: { missionId, mois, montant },
      })
    )
  );
  res.json({ message: 'Encaissements mis à jour' });
}
