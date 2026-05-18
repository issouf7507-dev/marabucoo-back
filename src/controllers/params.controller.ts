import type { Request, Response } from 'express';
import { prisma } from '../lib/prisma.js';

const MOIS_KEYS = ['jan','fev','mar','avr','mai','jun','jul','aou','sep','oct','nov','dec'] as const;

async function computeDynamic() {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonthIdx = now.getMonth(); // 0-based

  // masseSal: sum of salaries of active marabu staff
  const activeStaff = await prisma.staff.findMany({
    where: { actif: true, marabu: true },
    include: { paies: true },
  });
  const masseSal = activeStaff.reduce((s, x) => s + x.salaire, 0);

  // arrSal (total historique dû) & arrSalR (total déjà payé)
  let arrSal = 0;
  let arrSalR = 0;
  for (const staff of activeStaff) {
    if (!staff.debut) continue;
    const debutYear = staff.debut.getFullYear();
    const debutMonthIdx = staff.debut.getMonth();
    if (debutYear > currentYear) continue;

    for (let yr = debutYear; yr <= currentYear; yr++) {
      const startM = yr === debutYear ? debutMonthIdx : 0;
      const endM   = yr === currentYear ? currentMonthIdx - 1 : 11;
      for (let m = startM; m <= endM; m++) {
        const moisKey = MOIS_KEYS[m];
        const paie = staff.paies.find(p => p.mois === moisKey && p.annee === yr);
        arrSal += staff.salaire;
        if (paie?.statut === 'Payé') arrSalR += paie.montant ?? staff.salaire;
      }
    }
  }

  // coffre: last solde for each caisse in petite_caisse, summed
  const caisseGroups = await prisma.petiteCaisse.groupBy({ by: ['caisse'] });
  let coffre = 0;
  for (const g of caisseGroups) {
    const last = await prisma.petiteCaisse.findFirst({
      where: { caisse: g.caisse },
      orderBy: { id: 'desc' },
    });
    if (last) coffre += last.solde;
  }

  // banque: sum of credits - debits from depenses
  const depAgg = await prisma.depense.aggregate({ _sum: { credit: true, debit: true } });
  const banque = (depAgg._sum.credit ?? 0) - (depAgg._sum.debit ?? 0);

  return { masseSal, arrSal, arrSalR, coffre, banque };
}

export async function get(_req: Request, res: Response): Promise<void> {
  let params = await prisma.params.findUnique({ where: { id: 1 } });
  if (!params) {
    params = await prisma.params.create({ data: { id: 1 } });
  }
  const computed = await computeDynamic();
  res.json({ ...params, ...computed });
}

export async function upsert(req: Request, res: Response): Promise<void> {
  // Only persist manually-set fields; computed fields are derived at read time
  const { banque: _b, coffre: _c, masseSal: _m, arrSal: _as, arrSalR: _asr, ...manual } = req.body;
  const params = await prisma.params.upsert({
    where: { id: 1 },
    update: manual,
    create: { id: 1, ...manual },
  });
  const computed = await computeDynamic();
  res.json({ ...params, ...computed });
}
