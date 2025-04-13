import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { json } from "express";
import jwt from "jsonwebtoken";

const generateToken = (_id) => {
  return jwt.sign({ _id:_id }, process.env.SECRET_KEY || "qazwsxedcrfv", {
    expiresIn: "7d",
  });
};

export const register = async (req, res) => {
  try {
    const { fullName, email, password, role, phoneNumber } = req.body;
    if (!fullName || !email || !password || !role || !phoneNumber) {
      res.status(400).json({ message: "Some Thing is Missing" });
      return;
    }
    const cloudinaryUrls = req.body.cloudinaryUrls;
    if (cloudinaryUrls.length === 0) {
      res.status(500).json({ message: "Internal Server Error" });
      return;
    }
    const imageUrls = cloudinaryUrls[0];
    const user = await User.findOne({ email: email });
    if (user) {
      res.status(400).json({ message: "user Allready Exist" });
      return;
    }
    const hashedpassword = await bcrypt.hash(password, 10);
    const new_User = new User({
      fullName: fullName,
      email: email,
      password: hashedpassword,
      phoneNumber: phoneNumber,
      role: role,
      profile: {
        profilePhoto: imageUrls,
      },
    });
    await new_User.save();
    const token = generateToken(new_User._id.toString());
    res.cookie("auth_token", token);
    return res.status(201).json(new_User);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const login = async (req,res) =>{
    try{
        const {email, password , role} = req.body
        if(!email || !password || !role){
            res.status(400).json({message:"Credentials Required"})
            return
        }
        const user = await User.findOne({email:email})
        if (!user){
            res.status(400).json({message:"Invalid Credentials"})
            return
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            res.status(400).json({message:"Invalid Credentials"})
            return
        }
        const token = generateToken(user._id.toString())
        res.cookie("auth_token",token,{httpOnly:true})
        return res.status(201).json(token)

    }
    catch(error){
       res.status(500).json({message:'Internal Server Error'})
    }
}

export const logout = async (req,res) =>{
    res.clearCookie("auth_token");
    return res.status(200).json({message:"Logout SuccesFully"})
}

export const getProfile = async (req, res) => {
  try {
      const _id = req._id; // Assuming req._id is set by middleware (e.g., authentication)
      const user = await User.findOne({ _id })
          .select("-password")
          .populate({
              path: 'profile.company', // Correct path to populate company within profile
          });

      if (!user) {
          return res.status(400).json({ message: "User Not Found" });
      }

      return res.status(200).json(user);
  } catch (error) {
      console.error("Error fetching profile:", error); // Log the error for debugging
      return res.status(500).json({ message: "Internal Server Error" });
  }
};


export const updateProfile = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, bio, skills } = req.body;
    const Id = req._id;
    
    
    let skillsArray = [];
    if (skills) {
      skillsArray = skills.split(",").map(skill => skill.trim());
    }
    
    
    const user = await User.findById(Id)
    if (!user) {
      return res.status(400).json({ message: "User not found", success: false });
    }
    
    
    user.fullName = fullName;
    user.email = email;
    user.phoneNumber = phoneNumber;
    user.profile.bio = bio;
    user.profile.skills = skillsArray;
    
    
    const cloudinaryUrls = req.body.cloudinaryUrls || [];
    
    
    if (cloudinaryUrls.length > 0) {
      const image = cloudinaryUrls[0];
      const name = fullName+"resume"
      
      user.profile.resume = image;
      user.profile.resumeOriginalName = name;
    }
    
    // Save the user
    await user.save();
    
    return res.status(200).json({ message: "User updated successfully", success: true });
  } catch (error) {
    console.error("Error updating profile:", error);
    return res.status(500).json({ message: error.message, success: false });
  }
}