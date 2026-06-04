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

function deriveCreditDebit(type?: string, montant?: number, fraisTransf?: number, penalite?: number) {
  const mnt = montant ?? 0;
  const ft  = fraisTransf ?? 0;
  const pen = penalite ?? 0;
  if (type === 'ENTREE BANQUE') return { credit: mnt, debit: 0 };
  if (type === 'SORTIE BANQUE') return { credit: 0, debit: mnt + ft + pen };
  return {};
}

export async function create(req: Request, res: Response): Promise<void> {
  const parsed = depenseSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: 'Données invalides', errors: parsed.error.flatten() });
    return;
  }
  const { date, ...rest } = parsed.data;
  const derived = deriveCreditDebit(rest.type, rest.montant, rest.fraisTransf, rest.penalite);
  const dep = await prisma.depense.create({ data: { ...rest, ...derived, date: new Date(date) } });
  res.status(201).json(dep);
}

export async function update(req: Request, res: Response): Promise<void> {
  const parsed = depenseSchema.partial().safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: 'Données invalides' });
    return;
  }
  const { date, ...rest } = parsed.data;
  // Recompute credit/debit only when type or amounts are provided in the update
  const existing = await prisma.depense.findUniqueOrThrow({ where: { id: Number(req.params.id) } });
  const mergedType  = rest.type        ?? existing.type;
  const mergedMnt   = rest.montant     ?? existing.montant;
  const mergedFt    = rest.fraisTransf ?? existing.fraisTransf;
  const mergedPen   = rest.penalite    ?? existing.penalite;
  const derived = deriveCreditDebit(mergedType, mergedMnt ?? 0, mergedFt ?? 0, mergedPen ?? 0);
  const dep = await prisma.depense.update({
    where: { id: Number(req.params.id) },
    data: { ...rest, ...derived, ...(date ? { date: new Date(date) } : {}) },
  });
  res.json(dep);
}

export async function remove(req: Request, res: Response): Promise<void> {
  await prisma.depense.delete({ where: { id: Number(req.params.id) } });
  res.status(204).send();
}
