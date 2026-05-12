import type { Response } from 'express';
import bcrypt from 'bcryptjs';
import { z } from 'zod';
import { prisma } from '../lib/prisma.js';
import type { AuthRequest } from '../types/index.js';

const createSchema = z.object({
  name:     z.string().min(2),
  email:    z.string().email(),
  password: z.string().min(6),
  role:     z.enum(['ADMIN', 'COO', 'VIEWER']).default('VIEWER'),
});

const updateSchema = z.object({
  name:   z.string().min(2).optional(),
  role:   z.enum(['ADMIN', 'COO', 'VIEWER']).optional(),
  active: z.boolean().optional(),
});

const SELECT = { id: true, name: true, email: true, role: true, active: true, createdAt: true } as const;

export async function getAll(_req: AuthRequest, res: Response): Promise<void> {
  const users = await prisma.user.findMany({ select: SELECT, orderBy: { createdAt: 'asc' } });
  res.json(users);
}

export async function create(req: AuthRequest, res: Response): Promise<void> {
  const parsed = createSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: 'Données invalides', errors: parsed.error.flatten() });
    return;
  }
  const { name, email, password, role } = parsed.data;
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    res.status(409).json({ message: 'Cet email est déjà utilisé' });
    return;
  }
  const hash = await bcrypt.hash(password, 12);
  const user = await prisma.user.create({
    data: { name, email, password: hash, role },
    select: SELECT,
  });
  res.status(201).json(user);
}

export async function update(req: AuthRequest, res: Response): Promise<void> {
  const parsed = updateSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: 'Données invalides' });
    return;
  }
  if (String(req.params.id) === req.user!.userId && parsed.data.active === false) {
    res.status(400).json({ message: 'Impossible de se bloquer soi-même' });
    return;
  }
  const user = await prisma.user.update({
    where:  { id: String(req.params.id) },
    data:   parsed.data,
    select: SELECT,
  });
  res.json(user);
}

export async function remove(req: AuthRequest, res: Response): Promise<void> {
  if (String(req.params.id) === req.user!.userId) {
    res.status(400).json({ message: 'Impossible de supprimer son propre compte' });
    return;
  }
  await prisma.user.delete({ where: { id: String(req.params.id) } });
  res.status(204).send();
}
