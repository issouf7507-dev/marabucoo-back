-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'COO', 'VIEWER');

-- CreateEnum
CREATE TYPE "MissionStatut" AS ENUM ('PROSPECT', 'TDR', 'PROPALE', 'CONTRAT', 'EN_COURS', 'TERMINE', 'PERDU');

-- CreateTable
CREATE TABLE "clients" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "secteur" TEXT,
    "tel" TEXT,
    "email" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'VIEWER',
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "missions" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "client" TEXT NOT NULL,
    "apporteur" TEXT,
    "statut" "MissionStatut" NOT NULL DEFAULT 'PROSPECT',
    "montant" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "avance" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "debut" TIMESTAMP(3),
    "fin" TIMESTAMP(3),
    "tva" TEXT NOT NULL DEFAULT 'exo',
    "nature" TEXT NOT NULL DEFAULT 'prevu',
    "desc" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "missions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mission_enc" (
    "id" SERIAL NOT NULL,
    "missionId" INTEGER NOT NULL,
    "mois" TEXT NOT NULL,
    "montant" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "mission_enc_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "factures" (
    "id" SERIAL NOT NULL,
    "missionId" INTEGER NOT NULL,
    "num" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "ht" DOUBLE PRECISION NOT NULL,
    "tvaType" TEXT NOT NULL DEFAULT 'exo',
    "tvaMontant" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "ttc" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "factures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tranches" (
    "id" SERIAL NOT NULL,
    "factureId" INTEGER NOT NULL,
    "num" INTEGER NOT NULL,
    "montant" DOUBLE PRECISION NOT NULL,
    "echeance" TIMESTAMP(3) NOT NULL,
    "encaisse" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "dateEnc" TIMESTAMP(3),
    "ref" TEXT,
    "statut" TEXT NOT NULL DEFAULT 'En attente',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tranches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "staff" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "poste" TEXT,
    "salaire" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "nature" TEXT NOT NULL DEFAULT 'Consultant',
    "debut" TIMESTAMP(3),
    "fin" TEXT,
    "marabu" BOOLEAN NOT NULL DEFAULT true,
    "actif" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "staff_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "staff_paies" (
    "id" SERIAL NOT NULL,
    "staffId" INTEGER NOT NULL,
    "mois" TEXT NOT NULL,
    "annee" INTEGER NOT NULL DEFAULT 2026,
    "montant" DOUBLE PRECISION,
    "statut" TEXT,

    CONSTRAINT "staff_paies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "charges" (
    "id" SERIAL NOT NULL,
    "libelle" TEXT NOT NULL,
    "categorie" TEXT NOT NULL,
    "nature" TEXT NOT NULL DEFAULT 'fixe',
    "type" TEXT NOT NULL DEFAULT 'prevu',
    "periodicite" TEXT NOT NULL DEFAULT 'Mensuelle',
    "budget" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "moisApplicables" TEXT NOT NULL DEFAULT '',
    "obs" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "charges_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "charge_reels" (
    "id" SERIAL NOT NULL,
    "chargeId" INTEGER NOT NULL,
    "mois" TEXT NOT NULL,
    "annee" INTEGER NOT NULL DEFAULT 2026,
    "montant" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "statut" TEXT,
    "datePmt" TIMESTAMP(3),

    CONSTRAINT "charge_reels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "depenses" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "categorie" TEXT,
    "periode" TEXT,
    "intitule" TEXT,
    "date" TIMESTAMP(3) NOT NULL,
    "designation" TEXT NOT NULL,
    "prestataire" TEXT,
    "montant" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "credit" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "debit" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "fraisTransf" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "penalite" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "reference" TEXT,
    "nature" TEXT NOT NULL DEFAULT 'prevu',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "depenses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "petite_caisse" (
    "id" SERIAL NOT NULL,
    "num" TEXT NOT NULL,
    "caisse" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "categorie" TEXT,
    "nature" TEXT NOT NULL DEFAULT 'prevu',
    "periode" TEXT,
    "date" TIMESTAMP(3) NOT NULL,
    "designation" TEXT NOT NULL,
    "prestataire" TEXT,
    "entree" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "sortie" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "penalite" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "solde" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "refFacture" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "petite_caisse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tresorerie" (
    "id" SERIAL NOT NULL,
    "mois" TEXT NOT NULL,
    "annee" INTEGER NOT NULL DEFAULT 2026,
    "type" TEXT NOT NULL DEFAULT 'prevision',
    "banque" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "coffre" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "entrees" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "chgPrev" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "chgPay" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "reste" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tresorerie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "params" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "banque" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "coffre" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "masseSal" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "chargesPat" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "primesMens" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "arrSal" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "arrSalR" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "arrSalM" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "arrPrim" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "arrPrimM" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "params_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "mission_enc_missionId_mois_key" ON "mission_enc"("missionId", "mois");

-- CreateIndex
CREATE UNIQUE INDEX "factures_num_key" ON "factures"("num");

-- CreateIndex
CREATE UNIQUE INDEX "staff_paies_staffId_mois_annee_key" ON "staff_paies"("staffId", "mois", "annee");

-- CreateIndex
CREATE UNIQUE INDEX "charge_reels_chargeId_mois_annee_key" ON "charge_reels"("chargeId", "mois", "annee");

-- CreateIndex
CREATE UNIQUE INDEX "petite_caisse_num_key" ON "petite_caisse"("num");

-- CreateIndex
CREATE UNIQUE INDEX "tresorerie_mois_annee_key" ON "tresorerie"("mois", "annee");

-- AddForeignKey
ALTER TABLE "mission_enc" ADD CONSTRAINT "mission_enc_missionId_fkey" FOREIGN KEY ("missionId") REFERENCES "missions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "factures" ADD CONSTRAINT "factures_missionId_fkey" FOREIGN KEY ("missionId") REFERENCES "missions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tranches" ADD CONSTRAINT "tranches_factureId_fkey" FOREIGN KEY ("factureId") REFERENCES "factures"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "staff_paies" ADD CONSTRAINT "staff_paies_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "staff"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "charge_reels" ADD CONSTRAINT "charge_reels_chargeId_fkey" FOREIGN KEY ("chargeId") REFERENCES "charges"("id") ON DELETE CASCADE ON UPDATE CASCADE;
