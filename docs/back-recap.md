# Récap — Setup Back-end Marabu COO

## Stack

| Élément | Choix |
|---|---|
| Runtime | Node.js + `tsx` (dev) |
| Framework | Express 4 |
| ORM | Prisma 7 |
| Driver DB | `pg` (PostgreSQL) via `@prisma/adapter-pg` |
| Auth | JWT (`jsonwebtoken`) + `bcryptjs` |
| Validation | Zod |
| Langage | TypeScript 5 strict |

---

## Structure `src/`

```
src/
├── config/
│   └── env.ts           ← variables d'env validées au démarrage
├── controllers/
│   ├── auth.controller.ts
│   ├── charges.controller.ts
│   ├── depenses.controller.ts
│   ├── missions.controller.ts
│   ├── params.controller.ts
│   ├── staff.controller.ts
│   └── tresorerie.controller.ts
├── lib/
│   └── prisma.ts        ← instance Prisma singleton (Pool pg + adapter)
├── middleware/
│   ├── asyncHandler.ts  ← wrapper try/catch pour les controllers
│   ├── auth.ts          ← middleware requireAuth (vérif JWT)
│   └── errorHandler.ts  ← handler global d'erreurs Express
├── routes/
│   ├── auth.ts
│   ├── charges.ts
│   ├── depenses.ts
│   ├── missions.ts
│   ├── params.ts
│   ├── staff.ts
│   └── tresorerie.ts
├── types/
│   └── index.ts         ← type AuthRequest (Request + user)
└── index.ts             ← point d'entrée Express
```

---

## Ce qui a été configuré

### 1. `src/config/env.ts`
Centralise la lecture et la validation des variables d'environnement.  
Lance une erreur explicite au démarrage si une variable obligatoire est absente.

Variables gérées :

| Variable | Obligatoire | Défaut |
|---|---|---|
| `DATABASE_URL` | oui | — |
| `JWT_SECRET` | oui | — |
| `JWT_EXPIRES_IN` | non | `7d` |
| `PORT` | non | `3000` |
| `NODE_ENV` | non | `development` |
| `CORS_ORIGIN` | non | `http://localhost:5173` |

### 2. `src/lib/prisma.ts`
- Crée un `Pool` pg avec `DATABASE_URL`
- Enveloppe le pool dans `PrismaPg` (driver adapter Prisma 7)
- Passe l'adapter à `PrismaClient` — la connexion passe donc par le pool pg natif
- Pattern singleton via `globalThis` pour éviter les connexions multiples en dev (hot-reload)
- Import du client depuis `../../generated/prisma` (output custom dans `prisma/schema.prisma`)

### 3. `src/middleware/errorHandler.ts`
- Suppression de l'import `Prisma` de `@prisma/client` (incompatible avec `moduleResolution: node` + Prisma 7)
- Remplacement par un type guard `isPrismaError` structurel (`err instanceof Error && 'code' in err`)
- Gestion des codes Prisma `P2002` (unicité → 409) et `P2025` (introuvable → 404)

### 4. Dépendance ajoutée
```
@types/pg  (devDependency)
```
Résout l'erreur TypeScript `Could not find a declaration file for module 'pg'`.

---

## Schéma Prisma (`prisma/schema.prisma`)

Modèles déclarés :

| Modèle | Description |
|---|---|
| `User` | Comptes (ADMIN / COO / VIEWER) |
| `Mission` + `MissionEnc` | Missions et encaissements mensuels |
| `Facture` + `Tranche` | Facturation et paiements par tranches |
| `Staff` + `StaffPaie` | Ressources humaines et paies mensuelles |
| `Charge` + `ChargeReel` | Charges budgétées et réalisées |
| `Depense` | Mouvements banque (entrées/sorties) |
| `PetiteCaisse` | Mouvements petite caisse |
| `Tresorerie` | Tableau de trésorerie mensuel |
| `Params` | Paramètres globaux (singleton id=1) |

Output client généré dans `generated/prisma/` (défini dans le schema).

---

## Scripts disponibles

```bash
pnpm dev          # tsx watch — hot reload
pnpm build        # tsc → dist/
pnpm start        # node dist/index.js
pnpm db:migrate   # prisma migrate dev
pnpm db:generate  # prisma generate
pnpm db:studio    # Prisma Studio UI
pnpm db:seed      # seed initial
```

---

## Variables d'environnement (`.env`)

```env
DATABASE_URL="postgresql://user:password@localhost:5432/marabucoo"
JWT_SECRET="change-this-to-a-long-random-secret"
JWT_EXPIRES_IN="7d"
PORT=3000
NODE_ENV=development
CORS_ORIGIN="http://localhost:5173"
```
