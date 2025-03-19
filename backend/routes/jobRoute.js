import express from "express";
import {postJob , findAllJobs , findJobById , findAdminJobs  } from "../controllers/jobController.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router()

router.post('/postjob',postJob)
router.get('/findalljob',findAllJobs)
router.get('/findjobbyid',findJobById)
router.get('/findadminjobs',authMiddleware,findAdminJobs)




export default router;
