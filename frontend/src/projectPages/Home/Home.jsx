import React from "react";
import Navbar from "../../projectComponents/Navbar/Navbar.jsx";
import Hero from "../../projectComponents/Hero/Hero.jsx";
import Footer from "../../projectComponents/Footer/Footer.jsx";
import MainJobs from "../../projectComponents/MainJobs/MainJobs.jsx";
import { LogIn } from "lucide-react";
import Login from "../Login/Login.jsx";
import Profile from "../Profile/Profile.jsx";
import JobSearchPage from "../Job/Job.jsx";
import JobDetails from "../JobDetails/JobDetails.jsx";
import ProfileUpdatePage from "../UploadProfilePage/UpdateProfilePage.jsx";
import UpdateProfile from "../UploadProfilePage/UpdateProfilePage.jsx";

const Home = () => (
  <div className="flex flex-col">
    <Hero />
    <MainJobs />
    
  </div>
);

export default Home;
