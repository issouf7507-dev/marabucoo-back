import type { Request, Response } from 'express';
import { z } from 'zod';
import { prisma } from '../lib/prisma.js';

const depenseSchema = z.object({
  type: z.string().min(1),
  categorie: z.string().optional(),
  periode: z.string().optional(),
  intitule: z.string().optional(),
  date: z.string(),
  designation: z.string().min(1),
  prestataire: z.string().optional(),
  montant: z.number().optional(),
  credit: z.number().optional(),
  debit: z.number().optional(),
  fraisTransf: z.number().optional(),
  penalite: z.number().optional(),
  reference: z.string().optional(),
  nature: z.string().optional(),
});

export async function getAll(req: Request, res: Response): Promise<void> {
  const { periode } = req.query;
  const depenses = await prisma.depense.findMany({
    where: periode ? { periode: String(periode) } : undefined,
    orderBy: { date: 'asc' },
  });
  res.json(depenses);
}

export async function create(req: Request, res: Response): Promise<void> {
  const parsed = depenseSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: 'Données invalides', errors: parsed.error.flatten() });
    return;
  }
  const { date, ...rest } = parsed.data;
  const dep = await prisma.depense.create({ data: { ...rest, date: new Date(date) } });
  res.status(201).json(dep);
}

export async function update(req: Request, res: Response): Promise<void> {
  const parsed = depenseSchema.partial().safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: 'Données invalides' });
    return;
  }
  const { date, ...rest } = parsed.data;
  const dep = await prisma.depense.update({
    where: { id: Number(req.params.id) },
    data: { ...rest, ...(date ? { date: new Date(date) } : {}) },
  });
  res.json(dep);
}

export async function remove(req: Request, res: Response): Promise<void> {
  await prisma.depense.delete({ where: { id: Number(req.params.id) } });
  res.status(204).send();
}
