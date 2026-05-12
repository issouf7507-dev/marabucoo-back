import { Router } from 'express';
import { getAll, getOne, create, update, remove, updateTranche } from '../controllers/factures.controller.js';
import { requireAuth } from '../middleware/auth.js';
import { asyncHandler } from '../middleware/asyncHandler.js';

const router = Router();
router.use(requireAuth);

router.get('/',                          asyncHandler(getAll));
router.get('/:id',                       asyncHandler(getOne));
router.post('/',                         asyncHandler(create));
router.put('/:id',                       asyncHandler(update));
router.delete('/:id',                    asyncHandler(remove));
router.put('/:id/tranches/:tid',         asyncHandler(updateTranche));

export default router;
