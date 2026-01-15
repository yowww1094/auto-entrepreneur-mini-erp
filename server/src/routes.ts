import { Router } from "express";

import authRoutes from './modules/auth/auth.routes.js'
import autoEntrepreneurRoutes from './modules/auto-entrepreneur/auto-entrepreneur.routes.js'

const router = Router();

router.use(authRoutes);
router.use(autoEntrepreneurRoutes);

export default router;