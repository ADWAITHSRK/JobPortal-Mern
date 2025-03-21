// application.routes.js
import express from "express";
const router = express.Router();
import { applyJob, getAppliedJobs, updateStatus } from "../controllers/applicationController.js";
import authMiddleware from "../middleware/auth.js";

// Apply to a specific job
router.post("/apply/:id", authMiddleware, applyJob);

// Get all applications for current user
router.get("/my-applications", authMiddleware, getAppliedJobs);

// Update application status
router.put("/update/:id", authMiddleware, updateStatus);

export default router;