import { Application } from "../models/applicationModel.js";
import { Job } from "../models/jobModel.js";

export const applyJob = async (req,res) => {
    try {
        const userid = req._id
        const jobid = req.params.id

        const existingapplication = await Application.findOne({job:jobid,applicant:userid})

        if(existingapplication){
            res.status(400).json({message:"All ready an Application Exist"})
            return 
        }

        const job = await Job.findById(jobid)

        if(!job){
            res.status(404).json({message:"job Not Exist"})
            return
        }

        const application = new Application({
            job:jobid,
            applicant:userid
        })

        await application.save();
        job.applications.push(application._id)
        await job.save();

        return res.status(200).json(application)
    }
    catch(error){
        return res.status(500).json({message:"Internal Server Error"})

    }
}

export const alreadyApplied = async (req,res) => {
    try {
        const userid = req._id
        const jobid = req.params.id

        const existingapplication = await Application.findOne({job:jobid,applicant:userid})
        if (existingapplication){
            return res.status(200).json(true)
        }
        else{
            return res.status(200).json(false)
        }

        
    }
    catch(error){
        return res.status(500).json({message:"Internal Server Error"})

    }
}

export const getAppliedJobs = async (req , res) => {
    try {

        const userid = req._id
        const application = await Application.find({applicant:userid}).populate({path:"job",populate:{path:"company"}})

        if (application.length == 0){
            res.status(400).json({message:"No Application"})
            return
        }

        return res.status(200).json(application)

    }
     catch(error){
        return res.status(500).json({message:"Internal Server Error",message:message.error})
     }
}

export const updateStatus = async (req , res) => {
    try {
        const {status} = req.body
        const applicationid = req.params.id
        

        if(!status) {
             return res.status(400).json({message:"Some Data is missing"})
            
        }

        const application = await Application.findById(applicationid)

        if (!application) {
           return  res.status(400).json({message:"No Application"})
        }

        application.status = status.toLowerCase()
        await application.save();

        return res.status(200).json(application)

    }
    catch(error){
        return res.status(500).json({message:error.message})
    }
}