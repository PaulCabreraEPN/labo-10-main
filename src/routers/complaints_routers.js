import { Router } from "express";
import { findComplaintController, getComplaintController, registerComplaintController } from "../controllers/complaints_controller.js";
import { verifyToken } from "../middlewares/auth.js";
const router = Router();

router.post('/complaints/register', verifyToken, registerComplaintController);
router.get('/complaints',verifyToken,getComplaintController)
router.get('/complaints/:id',verifyToken,findComplaintController)


export default router;