import { Router } from 'express';
import { getAll, upsert } from '../controllers/tresorerie.controller.js';
import { requireAuth } from '../middleware/auth.js';
import { asyncHandler } from '../middleware/asyncHandler.js';

const router = Router();
router.use(requireAuth);

router.get('/', asyncHandler(getAll));
router.put('/:mois/:annee', asyncHandler(upsert));

export default router;
