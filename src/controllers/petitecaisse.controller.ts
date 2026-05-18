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
  refFacture:  z.string().optional(),
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

// Recalculates the running solde for all entries of a caisse starting from a given id
async function recalcSoldes(caisse: string, fromId: number): Promise<void> {
  const rows = await prisma.petiteCaisse.findMany({
    where: { caisse },
    orderBy: { id: 'asc' },
  });
  const fromIdx = rows.findIndex(r => r.id === fromId);
  if (fromIdx < 0) return;

  let prev = fromIdx > 0 ? rows[fromIdx - 1].solde : 0;
  for (let i = fromIdx; i < rows.length; i++) {
    const r = rows[i];
    const newSolde = prev + r.entree - r.sortie - r.penalite;
    if (newSolde !== r.solde) {
      await prisma.petiteCaisse.update({ where: { id: r.id }, data: { solde: newSolde } });
    }
    prev = newSolde;
  }
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
  const prev  = await lastSolde(d.caisse);
  const solde = prev + (d.entree ?? 0) - (d.sortie ?? 0) - (d.penalite ?? 0);
  const num   = await nextNum();
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
      refFacture:  d.refFacture,
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
  // Recalculate all subsequent soldes for this caisse from this entry
  await recalcSoldes(row.caisse, row.id);
  const updated = await prisma.petiteCaisse.findUnique({ where: { id: row.id } });
  res.json(updated);
}

export async function remove(req: Request, res: Response): Promise<void> {
  const row = await prisma.petiteCaisse.findUnique({ where: { id: Number(req.params.id) } });
  await prisma.petiteCaisse.delete({ where: { id: Number(req.params.id) } });
  if (row) {
    // Find the entry that now precedes where the deleted one was and recalc from there
    const prev = await prisma.petiteCaisse.findFirst({
      where: { caisse: row.caisse, id: { lt: row.id } },
      orderBy: { id: 'desc' },
    });
    const firstAfter = await prisma.petiteCaisse.findFirst({
      where: { caisse: row.caisse, id: { gt: row.id } },
      orderBy: { id: 'asc' },
    });
    if (firstAfter) await recalcSoldes(row.caisse, firstAfter.id);
    else if (prev) {
      // Nothing after — no recalc needed, last solde was this one
    }
  }
  res.status(204).send();
}
