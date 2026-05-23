import type { Request, Response } from 'express';
import { z } from 'zod';
import { prisma } from '../lib/prisma.js';

const missionSchema = z.object({
  nom: z.string().min(1),
  client: z.string().min(1),
  apporteur: z.string().optional(),
  statut: z.enum(['PROSPECT', 'TDR', 'PROPALE', 'CONTRAT', 'EN_COURS', 'TERMINE', 'PERDU']).optional(),
  montant: z.number().min(0).optional(),
  avance: z.number().min(0).optional(),
  debut: z.string().optional(),
  fin: z.string().optional(),
  tva: z.string().optional(),
  nature: z.string().optional(),
  desc: z.string().optional(),
});

export async function getAll(_req: Request, res: Response): Promise<void> {
  const missions = await prisma.mission.findMany({
    include: { encaissements: true },
    orderBy: { createdAt: 'desc' },
  });
  res.json(missions);
}

export async function getOne(req: Request, res: Response): Promise<void> {
  const mission = await prisma.mission.findUnique({
    where: { id: Number(req.params.id) },
    include: { encaissements: true, factures: { include: { tranches: true } } },
  });
  if (!mission) {
    res.status(404).json({ message: 'Mission introuvable' });
    return;
  }
  res.json(mission);
}

export async function create(req: Request, res: Response): Promise<void> {
  const parsed = missionSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: 'Données invalides', errors: parsed.error.flatten() });
    return;
  }
  const { debut, fin, ...rest } = parsed.data;
  const mission = await prisma.mission.create({
    data: {
      ...rest,
      debut: debut ? new Date(debut) : undefined,
      fin:   fin   ? new Date(fin)   : undefined,
    },
  });
  res.status(201).json(mission);
}

export async function update(req: Request, res: Response): Promise<void> {
  const parsed = missionSchema.partial().safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: 'Données invalides' });
    return;
  }
  const { debut, fin, ...rest } = parsed.data;
  const mission = await prisma.mission.update({
    where: { id: Number(req.params.id) },
    data: {
      ...rest,
      ...(debut !== undefined ? { debut: new Date(debut) } : {}),
      ...(fin   !== undefined ? { fin: fin ? new Date(fin) : null } : {}),
    },
  });
  res.json(mission);
}

export async function remove(req: Request, res: Response): Promise<void> {
  await prisma.mission.delete({ where: { id: Number(req.params.id) } });
  res.status(204).send();
}

type ExtMission = {
  id: number;
  code: string;
  nom: string;
  client_nom: string;
  apporteur_affaires: string;
  progression_pct: number;
  budget_estime: number | null;
  budget: number | null;
  budget_reel: number | null;
  date_debut: string | null;
};

const EXTERNAL_URL   = 'https://adminer-test.marabu.services/api/missions/actives';
const EXTERNAL_TOKEN = '1bbf6dc2cb06799385897bc8ae891d23da952007bc7926e4e737fd2118803252';

export async function syncExternal(_req: Request, res: Response): Promise<void> {
  const resp = await fetch(EXTERNAL_URL, {
    headers: { Authorization: `Bearer ${EXTERNAL_TOKEN}` },
  });
  if (!resp.ok) {
    res.status(502).json({ message: `Erreur API externe : ${resp.status}` });
    return;
  }

  const { data } = (await resp.json()) as { data: ExtMission[] };
  let synced = 0;

  for (const m of data) {
    if (!m.code) continue;

    const clientNom = m.client_nom ?? 'Inconnu';

    // Créer le client s'il n'existe pas encore
    const existing = await prisma.client.findFirst({ where: { nom: clientNom } });
    if (!existing) {
      await prisma.client.create({ data: { nom: clientNom } });
    }

    // Ne pas écraser une mission déjà enregistrée localement
    const alreadyExists = await prisma.mission.findUnique({ where: { externalCode: m.code } });
    if (alreadyExists) continue;

    const montant   = m.budget ?? m.budget_estime ?? 0;
    const avance    = m.budget_reel ?? 0;
    const apporteur = m.apporteur_affaires && m.apporteur_affaires !== '—'
      ? m.apporteur_affaires.trim()
      : null;
    const statut = m.progression_pct >= 100 ? 'TERMINE' : 'EN_COURS';
    const debut  = m.date_debut ? new Date(m.date_debut) : null;

    await prisma.mission.create({
      data: {
        externalCode: m.code,
        nom:     m.nom,
        client:  clientNom,
        apporteur,
        montant,
        avance,
        statut,
        debut,
        tva:    'exo',
        nature: 'prevu',
      },
    });
    synced++;
  }

  res.json({ synced, total: data.length });
}

export async function updateEnc(req: Request, res: Response): Promise<void> {
  const missionId = Number(req.params.id);
  const enc: Record<string, number> = req.body;

  await Promise.all(
    Object.entries(enc).map(([mois, montant]) =>
      prisma.missionEnc.upsert({
        where: { missionId_mois: { missionId, mois } },
        update: { montant },
        create: { missionId, mois, montant },
      })
    )
  );
  res.json({ message: 'Encaissements mis à jour' });
}
