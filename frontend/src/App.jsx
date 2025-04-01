import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./projectComponents/Navbar/Navbar";
import Login from "./projectPages/Login/Login";
import SignUp from "./projectPages/Signup/Signup";
import Home from "./projectPages/Home/Home";
import { Toaster } from "./components/components/ui/sonner";
import SavedJobs from "./projectPages/SavedJobs/SavedJobs";
import Layout from "./projectComponents/Layout/Layout";
import JobEdit from "./projectComponents/JobEdit/JobEdit";
import Profile from "./projectPages/Profile/Profile";
import JobDetails from "./projectPages/JobDetails/JobDetails";
import JobCreationForm from "./projectPages/JobCreation/JobCreation";
import UpdateCompanyForm from "./projectPages/CompanyUpdate/CompanyUpdate";
import CreateCompanyForm from "./projectPages/CreateCompany/CreateCompany";
import CompanyProfile from "./projectPages/CompanyProfile/CompanyProfile";
import AdminJob from "./projectPages/AdminJobsPage/AdminJobsPage";
import UpdateProfile from "./projectPages/UploadProfilePage/UpdateProfilePage";
import AdminJobDetails from "./projectPages/AdminJobDetails/AdminJobDetails";
import AdminJobEdit from "./projectPages/AdminJobEdit/AdminJobEdit";
import Job from "./projectPages/Job/Job";
import ApplieJobs from "./projectPages/AppliedJobs/ApplieJobs";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout><Home /></Layout> ,
    },
    {
      path: "/alljobs",
      element:<Layout><Job /></Layout> ,
    },
    {
      path: "/my-applications",
      element:<Layout><ApplieJobs /></Layout> ,
    },
    {
      path: "/update-profile",
      element:<Layout><UpdateProfile /></Layout> ,
    },
    {
      path: "/company-profile",
      element:<Layout><CompanyProfile /></Layout> ,
    },
    {
      path: "/company-create",
      element:<Layout><CreateCompanyForm /></Layout> ,
    },
    {
      path: "/company-update",
      element:<Layout><UpdateCompanyForm /></Layout> ,
    },
    
    {
      path: "/jobdetails/:id",
      element:<Layout><JobDetails /></Layout> ,
    },
    {
      path: "/job-creation",
      element:<Layout><JobCreationForm /></Layout> ,
    },
    {
      path: "/profile",
      element:<Layout><Profile /></Layout> ,
    },
    {
      path: "/jobedit",
      element:<Layout><JobEdit /></Layout> ,
    },
    {
      path: "/login",
      element:<Layout><Login /></Layout> ,
    },
    {
      path: "/register",
      element: <Layout><SignUp /></Layout>,
    },
    {
      path: "/saved",
      element: <Layout><SavedJobs /></Layout>,
    },
    {
      path: "/admin-job",
      element:<Layout> <AdminJob /></Layout>,
    },
    {
      path: "/job-edit",
      element: <JobEdit />,
    },
    {
      path: "/admin-jobdetails/:id",
      element: <Layout><AdminJobDetails /></Layout>,
    },
    {
      path: "/admin-jobedit/:id",
      element: <Layout><AdminJobEdit /></Layout>,
    },
  
  
  ]);
  return (
    <div className="min-h-screen">
      <RouterProvider router={router} />
      <Toaster position='top-center'/>
  </div>
  );
};

export default App;
