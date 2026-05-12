import type { Request, Response } from 'express';
import { z } from 'zod';
import { prisma } from '../lib/prisma.js';

const staffSchema = z.object({
  nom: z.string().min(1),
  poste: z.string().optional(),
  salaire: z.number().min(0).optional(),
  nature: z.string().optional(),
  debut: z.string().optional(),
  fin: z.string().optional(),
  marabu: z.boolean().optional(),
  actif: z.boolean().optional(),
});

export async function getAll(_req: Request, res: Response): Promise<void> {
  const staff = await prisma.staff.findMany({
    include: { paies: true },
    orderBy: { nom: 'asc' },
  });
  res.json(staff);
}

export async function create(req: Request, res: Response): Promise<void> {
  const parsed = staffSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: 'Données invalides', errors: parsed.error.flatten() });
    return;
  }
  const { debut, ...rest } = parsed.data;
  const member = await prisma.staff.create({
    data: { ...rest, debut: debut ? new Date(debut) : undefined },
  });
  res.status(201).json(member);
}

export async function update(req: Request, res: Response): Promise<void> {
  const parsed = staffSchema.partial().safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: 'Données invalides' });
    return;
  }
  const { debut, ...rest } = parsed.data;
  const member = await prisma.staff.update({
    where: { id: Number(req.params.id) },
    data: { ...rest, ...(debut !== undefined ? { debut: new Date(debut) } : {}) },
  });
  res.json(member);
}

export async function remove(req: Request, res: Response): Promise<void> {
  await prisma.staff.delete({ where: { id: Number(req.params.id) } });
  res.status(204).send();
}

export async function upsertPaie(req: Request, res: Response): Promise<void> {
  const staffId = Number(req.params.id);
  const { mois, annee = new Date().getFullYear(), montant, statut } = req.body;

  const paie = await prisma.staffPaie.upsert({
    where: { staffId_mois_annee: { staffId, mois, annee } },
    update: { montant, statut },
    create: { staffId, mois, annee, montant, statut },
  });
  res.json(paie);
}
