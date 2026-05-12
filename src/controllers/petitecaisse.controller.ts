import type { Request, Response } from 'express';
import { z } from 'zod';
import { prisma } from '../lib/prisma.js';

const schema = z.object({
  caisse:      z.string().min(1),
  type:        z.string().min(1),
  categorie:   z.string().optional(),
  nature:      z.string().optional(),
  periode:     z.string().optional(),
  date:        z.string(),
  designation: z.string().min(1),
  prestataire: z.string().optional(),
  entree:      z.number().optional().default(0),
  sortie:      z.number().optional().default(0),
  penalite:    z.number().optional().default(0),
});

async function nextNum(): Promise<string> {
  const last = await prisma.petiteCaisse.findFirst({ orderBy: { id: 'desc' } });
  const year  = new Date().getFullYear();
  if (!last) return `PC-${year}-001`;
  const match = last.num.match(/(\d+)$/);
  const n = match ? parseInt(match[1]) + 1 : 1;
  return `PC-${year}-${String(n).padStart(3, '0')}`;
}

async function lastSolde(caisse: string): Promise<number> {
  const last = await prisma.petiteCaisse.findFirst({
    where: { caisse },
    orderBy: { id: 'desc' },
  });
  return last?.solde ?? 0;
}

export async function getAll(_req: Request, res: Response): Promise<void> {
  const rows = await prisma.petiteCaisse.findMany({ orderBy: { id: 'asc' } });
  res.json(rows);
}

export async function create(req: Request, res: Response): Promise<void> {
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: 'Données invalides', errors: parsed.error.flatten() });
    return;
  }
  const d = parsed.data;
  const prev   = await lastSolde(d.caisse);
  const solde  = prev + (d.entree ?? 0) - (d.sortie ?? 0);
  const num    = await nextNum();
  const row = await prisma.petiteCaisse.create({
    data: {
      num,
      caisse:      d.caisse,
      type:        d.type,
      categorie:   d.categorie,
      nature:      d.nature ?? 'prevu',
      periode:     d.periode,
      date:        new Date(d.date),
      designation: d.designation,
      prestataire: d.prestataire,
      entree:      d.entree ?? 0,
      sortie:      d.sortie ?? 0,
      penalite:    d.penalite ?? 0,
      solde,
    },
  });
  res.status(201).json(row);
}

export async function update(req: Request, res: Response): Promise<void> {
  const parsed = schema.partial().safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: 'Données invalides' });
    return;
  }
  const { date, ...rest } = parsed.data;
  const row = await prisma.petiteCaisse.update({
    where: { id: Number(req.params.id) },
    data: { ...rest, ...(date ? { date: new Date(date) } : {}) },
  });
  res.json(row);
}

export async function remove(req: Request, res: Response): Promise<void> {
  await prisma.petiteCaisse.delete({ where: { id: Number(req.params.id) } });
  res.status(204).send();
}
