import express from "express";
import {postJob , findAllJobs , findJobById , findAdminJobs,findApplicants ,editJob } from "../controllers/jobController.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router()

router.post('/postjob',authMiddleware,postJob)
router.get('/findalljob',findAllJobs)
router.get('/findjobbyid/:id',findJobById)
router.get('/editjob/:id',editJob)
router.get('/findadminjobs',authMiddleware,findAdminJobs)
router.get('/findapplicants/:id',authMiddleware,findApplicants)





export default router;
