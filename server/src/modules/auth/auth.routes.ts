import { Router } from "express";
import { authController } from "./auth.controller.js";
import { validate } from "../../middlewares/validation.middleware.js";
import { registerAutoEntrepreneurSchema, loginEntrepreneurSchema } from "./auth.schema.js";

const router = Router();

router.post("/auth/register", validate(registerAutoEntrepreneurSchema), authController.register);
router.post("/auth/login", validate(loginEntrepreneurSchema), authController.login);

router.post("/auth/reset-password", authController.resetPassword);

router.get("/auth/logout", authController.logout);

export default router;