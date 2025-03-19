import { Job } from "../models/jobModel.js";

export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirments,
      salary,
      location,
      jobType,
      experienceLevel,
      position,
      companyId,
    } = req.body;
    const userId = req._id;

    if (
      !title ||
      !description ||
      !requirments ||
      !salary ||
      !location ||
      !jobType ||
      !experience ||
      !position ||
      !companyId
    ) {
      res.status(400).json({ message: "Something is Missing" });
    }

    const job = new Job({
      title: title,
      description: description,
      requirements: requirments,
      salary: salary,
      experienceLevel: experienceLevel,
      location: location,
      position: position,
      company: companyId,
      jobType: jobType,
      created_by:userId
    });

    await job.save();
    return res.status(200).json(job);
  } catch (error) {
    console.log(error);

    return res.status(500).message({ message: "Internal Server Error" ,error:error.message});
  }
};


export const findAllJobs =  async (req , res) =>  {
    try  {
        const jobs = await  Job.find({})
        if (jobs.length  == 0) {
            res.status(404).json({message:"job Not Found"})
            return 
        }
        return  res.status(200).json(jobs)
    }
    catch(error){
        res.status(500).json({message:"internal Server Error",error:error.message})
    }
}

export const findJobById =  async (req , res) =>  {
    try  {
        const job = await  Job.findById({_id:req.params.id}).populate({path:"applications"})
        if (job.length  == 0) {
            res.status(404).json({message:"job Not Found"})
            return 
        }
        return  res.status(200).json(job)
    }
    catch(error){
        res.status(500).json({message:"internal Server Error",error:error.message})
    }
}


export const findAdminJobs =  async (req , res) =>  {
    try  {
        const jobs = await  Job.find({created_by:req._id}).populate({path:"company",createdAt:-1})
        if (jobs.length  == 0) {
            res.status(404).json({message:"job Not Found"})
            return 
        }
        return  res.status(200).json(jobs)
    }
    catch(error){
        res.status(500).json({message:"internal Server Error",error:error.message})
    }
}