import type { Request, Response } from 'express';
import { prisma } from '../lib/prisma.js';

const MK = ['jan','fev','mar','avr','mai','jun','jul','aou','sep','oct','nov','dec'];
const MF = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];

export async function getAll(req: Request, res: Response): Promise<void> {
  const annee = Number(req.query.annee) || new Date().getFullYear();

  // Manual entries (chgPrev, banque, coffre, type, entrees override)
  const rows = await prisma.tresorerie.findMany({
    where: { annee },
    orderBy: { id: 'asc' },
  });
  const moisMap = new Map(rows.map(r => [r.mois, r]));

  // Computed: salaires payés par mois
  const paies = await prisma.staffPaie.groupBy({
    by: ['mois'],
    where: { annee },
    _sum: { montant: true },
  });
  const paieByMk = new Map(paies.map(p => [p.mois, p._sum.montant ?? 0]));

  // Computed: charges réalisées par mois
  const chargeReels = await prisma.chargeReel.groupBy({
    by: ['mois'],
    where: { annee },
    _sum: { montant: true },
  });
  const chargeByMk = new Map(chargeReels.map(c => [c.mois, c._sum.montant ?? 0]));

  // Computed: encaissements de missions par mois (tranches encaissées)
  const tranches = await prisma.tranche.findMany({
    where: {
      dateEnc: {
        gte: new Date(`${annee}-01-01`),
        lt:  new Date(`${annee + 1}-01-01`),
      },
      encaisse: { gt: 0 },
    },
    select: { dateEnc: true, encaisse: true },
  });
  const encByMk = new Map<string, number>();
  for (const t of tranches) {
    if (!t.dateEnc) continue;
    const mk = MK[t.dateEnc.getMonth()];
    encByMk.set(mk, (encByMk.get(mk) ?? 0) + t.encaisse);
  }

  // Merge manual + computed — toujours 12 lignes
  const result = MF.map((mf, i) => {
    const mk      = MK[i];
    const manual  = moisMap.get(mf);
    const chgPay  = (paieByMk.get(mk) ?? 0) + (chargeByMk.get(mk) ?? 0);
    const entrees = manual?.entrees ?? (encByMk.get(mk) ?? 0);
    return {
      id:      manual?.id ?? 0,
      mois:    mf,
      annee,
      type:    manual?.type    ?? 'prevision',
      banque:  manual?.banque  ?? 0,
      coffre:  manual?.coffre  ?? 0,
      entrees,
      chgPrev: manual?.chgPrev ?? 0,
      chgPay,
      reste:   manual?.reste   ?? 0,
    };
  });

  res.json(result);
}

export async function upsert(req: Request, res: Response): Promise<void> {
  const mois  = String(req.params.mois);
  const annee = String(req.params.annee);
  const row   = await prisma.tresorerie.upsert({
    where:  { mois_annee: { mois, annee: Number(annee) } },
    update: req.body,
    create: { mois, annee: Number(annee), ...req.body },
  });
  res.json(row);
}
