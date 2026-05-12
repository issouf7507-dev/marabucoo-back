import { PrismaClient } from "../generated/prisma";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seed en cours...");

  // Utilisateur admin par défaut
  const existingAdmin = await prisma.user.findUnique({
    where: { email: "admin@marabu.ci" },
  });
  if (!existingAdmin) {
    const hash = await bcrypt.hash("Marabu2026!", 12);
    await prisma.user.create({
      data: {
        name: "Admin Marabu",
        email: "admin@marabu.ci",
        password: hash,
        role: "ADMIN",
      },
    });
    console.log("✅ Admin créé : admin@marabu.ci / Marabu2026!");
  } else {
    console.log("ℹ️  Admin déjà existant");
  }

  // Paramètres par défaut
  await prisma.params.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      banque: 9000000,
      coffre: 500000,
      masseSal: 4980000,
      chargesPat: 0,
      primesMens: 0,
      arrSal: 3000000,
      arrSalR: 0,
      arrSalM: 1500000,
      arrPrim: 0,
      arrPrimM: 0,
    },
  });
  console.log("✅ Paramètres initialisés");

  console.log("🌱 Seed terminé.");
}

main()
  .catch((e) => {
    console.error(e);
    // process.exit(1);
  })
  .finally(() => prisma.$disconnect());
