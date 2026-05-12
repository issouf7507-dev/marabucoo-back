import { Router } from 'express';
import { getAll, create, update, remove, upsertPaie } from '../controllers/staff.controller.js';
import { requireAuth } from '../middleware/auth.js';
import { asyncHandler } from '../middleware/asyncHandler.js';

const router = Router();
router.use(requireAuth);

router.get('/', asyncHandler(getAll));
router.post('/', asyncHandler(create));
router.put('/:id', asyncHandler(update));
router.delete('/:id', asyncHandler(remove));
router.put('/:id/paie', asyncHandler(upsertPaie));

export default router;
