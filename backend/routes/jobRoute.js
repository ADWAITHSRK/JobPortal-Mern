import express from "express";
import {postJob , findAllJobs , findJobById , findAdminJobs,findApplicants ,editJob ,findJobByIdAndDelete} from "../controllers/jobController.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router()

router.post('/postjob',authMiddleware,postJob)
router.get('/findalljob',findAllJobs)
router.get('/findjobbyid/:id',findJobById)
router.put('/editjob/:id',editJob)
router.get('/findadminjobs',authMiddleware,findAdminJobs)
router.get('/find-applicants/:id',authMiddleware,findApplicants)
router.delete('/deletejob/:id',findJobByIdAndDelete)


export default router;
