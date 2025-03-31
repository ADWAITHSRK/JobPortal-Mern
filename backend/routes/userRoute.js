import express from "express";
import { login,register,getProfile,logout,updateProfile } from "../controllers/userController.js";
import authMiddleware from "../middleware/auth.js";
import {upload,uploadToCloudinary} from "../middleware/cloudinary.js"

const router = express.Router()

router.post('/register',upload.array("image", 5),uploadToCloudinary,register)
router.post('/login',login)
router.post('/logout',authMiddleware,logout)
router.put('/update',authMiddleware,upload.array("images", 5),uploadToCloudinary,updateProfile)


router.get('/getprofile',authMiddleware,getProfile)


export default router;
