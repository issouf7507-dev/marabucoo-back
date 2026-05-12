import { Router } from 'express';
import { get, upsert } from '../controllers/params.controller.js';
import { requireAuth } from '../middleware/auth.js';
import { asyncHandler } from '../middleware/asyncHandler.js';

const router = Router();
router.use(requireAuth);

router.get('/', asyncHandler(get));
router.put('/', asyncHandler(upsert));

export default router;
