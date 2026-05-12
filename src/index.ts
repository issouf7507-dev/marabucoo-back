import "dotenv/config";
import express from "express";
import cors from "cors";

import authRouter from "./routes/auth.js";
import clientsRouter from "./routes/clients.js";
import facturesRouter from "./routes/factures.js";
import missionsRouter from "./routes/missions.js";
import staffRouter from "./routes/staff.js";
import chargesRouter from "./routes/charges.js";
import depensesRouter from "./routes/depenses.js";
import tresorerieRouter from "./routes/tresorerie.js";
import paramsRouter from "./routes/params.js";
import petiteCaisseRouter from "./routes/petitecaisse.js";
import usersRouter from "./routes/users.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();
const PORT = Number(process.env.PORT) || 4000;

// ── Middlewares ──────────────────────────────────────────────────────
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "https://marabucoo.marabu.services",
    credentials: true,
  }),
);
app.use(express.json());

// ── Routes ───────────────────────────────────────────────────────────
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/clients", clientsRouter);
app.use("/api/v1/factures", facturesRouter);
app.use("/api/v1/missions", missionsRouter);
app.use("/api/v1/staff", staffRouter);
app.use("/api/v1/charges", chargesRouter);
app.use("/api/v1/depenses", depensesRouter);
app.use("/api/v1/tresorerie", tresorerieRouter);
app.use("/api/v1/params", paramsRouter);
app.use("/api/v1/petite-caisse", petiteCaisseRouter);
app.use("/api/v1/users", usersRouter);

// ── Health check ─────────────────────────────────────────────────────
app.get("/api/v1/health", (_req, res) => {
  res.json({
    status: "ok",
    env: process.env.NODE_ENV,
    timestamp: new Date().toISOString(),
  });
});

// ── 404 ──────────────────────────────────────────────────────────────
app.use((_req, res) => res.status(404).json({ message: "Route introuvable" }));

// ── Error handler ─────────────────────────────────────────────────────
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`\n🚀  Marabu API  →  http://localhost:${PORT}`);
  console.log(`    ENV : ${process.env.NODE_ENV || "development"}\n`);
});
