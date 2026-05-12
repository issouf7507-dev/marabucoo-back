import { Router } from 'express';
import { getAll, create, update, remove } from '../controllers/users.controller.js';
import { requireAuth, requireRole } from '../middleware/auth.js';
import { asyncHandler } from '../middleware/asyncHandler.js';

const router = Router();
router.use(requireAuth, requireRole('ADMIN'));

router.get('/',     asyncHandler(getAll));
router.post('/',    asyncHandler(create));
router.put('/:id',  asyncHandler(update));
router.delete('/:id', asyncHandler(remove));

export default router;
