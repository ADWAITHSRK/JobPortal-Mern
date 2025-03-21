// company.routes.js
import express from "express";
const router = express.Router();
import {
  registerCompany,
  getCompany,
  getCompanyById,
  updateCompany,
} from "../controllers/companyController.js";
import authMiddleware from "../middleware/auth.js";
import {upload,uploadToCloudinary} from "../middleware/cloudinary.js"


// Register a new company (requires authentication)
router.post("/regcompany", authMiddleware, registerCompany);

// Get all companies for the logged-in user
router.get("/getcompany", authMiddleware, getCompany);

// Get a specific company by ID
router.get("/getcompany/:id", authMiddleware, getCompanyById);

// Update company details
router.put("/update/:id", authMiddleware,upload.array("images", 5),uploadToCloudinary, updateCompany);

export default router;




