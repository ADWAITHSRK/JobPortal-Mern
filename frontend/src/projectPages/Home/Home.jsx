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

const Home = () => (
  <div className="flex flex-col gap-3 h-screen">
    {" "}
    {/* Added gap-3 */}
    <header>
      <Navbar />
    </header>
    <main className="container mx-auto flex flex-col flex-grow pb-[100px]">
      {" "}
      {/* Adjust pb-[100px] as needed */}
      {/* <Hero />
      <MainJobs />
      <Profile />  */}
      <JobSearchPage/> 
      {/* <JobDetails /> */}
    </main>
    <footer className="mt-auto w-full bg-neutral-700 sticky bottom-0">
      {" "}
      {/* Changed to sticky bottom-0 */}
      <Footer />
    </footer>
  </div>
);

export default Home;
