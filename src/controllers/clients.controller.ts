import type { Request, Response } from 'express';
import { z } from 'zod';
import { prisma } from '../lib/prisma.js';

const clientSchema = z.object({
  nom:     z.string().min(1, 'Le nom est requis'),
  secteur: z.string().optional(),
  tel:     z.string().optional(),
  email:   z.string().email('Email invalide').optional().or(z.literal('')),
});

export async function getAll(_req: Request, res: Response): Promise<void> {
  const clients = await prisma.client.findMany({ orderBy: { nom: 'asc' } });
  res.json(clients);
}

export async function create(req: Request, res: Response): Promise<void> {
  const parsed = clientSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: 'Données invalides', errors: parsed.error.flatten() });
    return;
  }
  const client = await prisma.client.create({ data: parsed.data });
  res.status(201).json(client);
}

export async function update(req: Request, res: Response): Promise<void> {
  const parsed = clientSchema.partial().safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: 'Données invalides' });
    return;
  }
  const client = await prisma.client.update({
    where: { id: Number(req.params.id) },
    data: parsed.data,
  });
  res.json(client);
}

export async function remove(req: Request, res: Response): Promise<void> {
  await prisma.client.delete({ where: { id: Number(req.params.id) } });
  res.status(204).send();
}
