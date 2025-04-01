// application.routes.js
import express from "express";
const router = express.Router();
import { applyJob, getAppliedJobs, updateStatus,alreadyApplied } from "../controllers/applicationController.js";
import authMiddleware from "../middleware/auth.js";

router.post("/apply/:id", authMiddleware, applyJob);
router.get("/prevapply/:id", authMiddleware, alreadyApplied);


router.get("/my-applications", authMiddleware, getAppliedJobs);

router.patch("/update/:id", authMiddleware, updateStatus);

export default router;