import type { Request, Response } from 'express';
import { prisma } from '../lib/prisma.js';

export async function get(_req: Request, res: Response): Promise<void> {
  let params = await prisma.params.findUnique({ where: { id: 1 } });
  if (!params) {
    params = await prisma.params.create({ data: { id: 1 } });
  }
  res.json(params);
}

export async function upsert(req: Request, res: Response): Promise<void> {
  const params = await prisma.params.upsert({
    where: { id: 1 },
    update: req.body,
    create: { id: 1, ...req.body },
  });
  res.json(params);
}
