import type { Request, Response, NextFunction } from 'express';

function isPrismaError(err: unknown): err is { code: string } {
  return err instanceof Error && 'code' in err;
}

export function errorHandler(err: unknown, _req: Request, res: Response, _next: NextFunction) {
  console.error(err);

  if (isPrismaError(err)) {
    if (err.code === 'P2002') {
      res.status(409).json({ message: 'Cette entrée existe déjà (contrainte d\'unicité)' });
      return;
    }
    if (err.code === 'P2025') {
      res.status(404).json({ message: 'Enregistrement introuvable' });
      return;
    }
  }

  if (err instanceof SyntaxError) {
    res.status(400).json({ message: 'JSON invalide' });
    return;
  }

  const message = err instanceof Error ? err.message : 'Erreur serveur interne';
  res.status(500).json({ message });
}
