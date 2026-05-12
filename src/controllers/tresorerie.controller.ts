import type { Request, Response } from 'express';
import { prisma } from '../lib/prisma.js';

export async function getAll(req: Request, res: Response): Promise<void> {
  const annee = Number(req.query.annee) || new Date().getFullYear();
  const rows = await prisma.tresorerie.findMany({
    where: { annee },
    orderBy: { id: 'asc' },
  });
  res.json(rows);
}

export async function upsert(req: Request, res: Response): Promise<void> {
  const mois = String(req.params.mois);
  const annee = String(req.params.annee);
  const row = await prisma.tresorerie.upsert({
    where: { mois_annee: { mois, annee: Number(annee) } },
    update: req.body,
    create: { mois, annee: Number(annee), ...req.body },
  });
  res.json(row);
}
