import { Router } from "express";
import { registerComplaintController } from "../controllers/complaints_controller.js";
import { verifyToken } from "../middlewares/auth.js";
const router = Router();

router.post('/complaints/register', verifyToken, registerComplaintController);

export default router;