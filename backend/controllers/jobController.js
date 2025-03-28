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

export const findApplicants =  async (req , res) =>  {
  try  {
      const job = await  Job.findById(req.params.id).populate({path:"applications",populate:{path:"applicant"}})
      if (!job) {
          res.status(404).json({message:"job Not Found"})
          return 
      }
      return  res.status(200).json(job)
  }
  catch(error){
      res.status(500).json({message:"internal Server Error",error:error.message})
  }
}


export const editJob =  async (req , res) =>  {
  try  {
      const {id} = req.params
      const {title , description , requirements , salary , location ,jobType , experienceLevel , position } = req.body

      const job = await job.findOne({_id:id})
      if(!job){
        return res.status(404).json({message:"Job Not Found"})
      }

    if (title) job.title = title;
    if (description) job.description = description;
    if (requirements) job.requirements = requirements;
    if (salary) job.salary = salary;
    if (location) job.location = location;
    if (jobType) job.jobType = jobType;
    if (experienceLevel) job.experienceLevel = experienceLevel;
    if (position) job.position = position;

    await job.save()
    return res.status(200).json(job)
  }
  catch(error){
      res.status(500).json({message:"internal Server Error",error:error.message})
  }
}




