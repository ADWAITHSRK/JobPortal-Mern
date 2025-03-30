import { Company } from "../models/companyModel.js";
import { Job } from "../models/jobModel.js";
import { User } from "../models/userModel.js";


export const registerCompany = async (req, res) => {
    try {
        const Id = req._id
        const user = await User.findById(Id)
        if(user?.profile?.company){
            return res.status(400).json({
                message: "Company All Ready Registred.",
                success: false
            })
        }

        const { companyName } = req.body;
        if (!companyName) {
            return res.status(400).json({
                message: "Company name is required.",
                success: false
            });
        }
         const cloudinaryUrls = req.body.cloudinaryUrls;
            if (cloudinaryUrls.length === 0) {
              res.status(500).json({ message: "Internal Server Error" });
              return;
            }
            const imageUrls = cloudinaryUrls[0];
       
        const company = await Company.create({
            name: companyName,
            logo:imageUrls,
            userId: Id
        });
        await company.save()
        return res.status(201).json(
            company)
    } catch (error) {
        console.log(error);
    }
}
export const getCompany = async (req, res) => {
    try {
        const Id = req._id; 
        const company = await Company.find({ userId:Id });
        if (!company) {
            return res.status(404).json({
                message: "Companies not found.",
                success: false
            })
        }
        return res.status(200).json(
            company[0]
        )
    } catch (error) {
        console.log(error);
    }
}
// get company by id
export const getCompanyById = async (req, res) => {
    try {
        const companyId = req.params.id;
        const company = await Company.findById(companyId);
        if (!company) {
            return res.status(404).json({
                message: "Company not found.",
                success: false
            })
        }
        return res.status(200).json({
            company,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}
export const updateCompany = async (req, res) => {
    try {
        
        const { name, description, website, location } = req.body;
 
        const cloudinaryUrls = req.body.cloudinaryUrls;
        if (cloudinaryUrls.length === 0) {
          res.status(500).json({ message: "Internal Server Error" });
          return;
        }
        const logo = cloudinaryUrls[0];
    
        const updateData = { name, description, website, location, logo };

        const company = await Company.findByIdAndUpdate(req.params.id, updateData, { new: true });

        if (!company) {
            return res.status(404).json({
                message: "Company not found.",
                success: false
            })
        }
        return res.status(200).json({
            message:"Company information updated.",
            success:true
        })

    } catch (error) {
        console.log(error);
    }
}

export const getCompanyAndDelete = async (req, res) => {
    try {
        const Id = req._id; 
        const company = await Company.find({ userId:Id });
        if (company.length === 0) {
            return res.status(404).json({
                message: "Companies not found.",
                success: false
            })
        }
        await Company.deleteMany({userId:Id})
        return res.status(200).json({message:"Deleted All Succesfully"}
        )
    } catch (error) {
        console.log(error);
    }
}