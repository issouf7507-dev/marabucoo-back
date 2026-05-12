import { Router } from "express";
import {
  login,
  register,
  me,
  changePassword,
} from "../controllers/auth.controller.js";
import { requireAuth } from "../middleware/auth.js";
import { asyncHandler } from "../middleware/asyncHandler.js";

const router = Router();

router.post("/login", asyncHandler(login));
router.post("/register", asyncHandler(register));
router.get("/me", requireAuth, asyncHandler(me));
router.post("/change-password", requireAuth, asyncHandler(changePassword));

export default router;
