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

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout><Home /></Layout> ,
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
      path: "/job-details",
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
      element: <SavedJobs />,
    },
    {
      path: "/admin-job",
      element: <AdminJob />,
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
