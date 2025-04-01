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
import ProtectedRoute from "./projectComponents/ProtectedRoute/ProtectedRoute";
import { AlignJustify } from "lucide-react";
import Applicants from "./projectPages/Applicants/Applicants";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
    {
      path: "/alljobs",
      element: (
        <Layout>
          <Job />
        </Layout>
      ),
    },
    {
      path: "/my-applications",
      element: (
        <ProtectedRoute>
          {" "}
          <Layout>
            <ApplieJobs />
          </Layout>
        </ProtectedRoute>
      ),
    },
    {
      path: "/update-profile",
      element: (
        <ProtectedRoute>
          {" "}
          <Layout>
            <UpdateProfile />
          </Layout>
        </ProtectedRoute>
      ),
    },
    {
      path: "/company-profile",
      element: (
        <ProtectedRoute>
          <Layout>
            <CompanyProfile />
          </Layout>
        </ProtectedRoute>
      ),
    },
    {
      path: "/company-create",
      element: (
        <ProtectedRoute>
          {" "}
          <Layout>
            <CreateCompanyForm />
          </Layout>
        </ProtectedRoute>
      ),
    },
    {
      path: "/company-update",
      element: (
        <ProtectedRoute>
          <Layout>
            <UpdateCompanyForm />
          </Layout>
        </ProtectedRoute>
      ),
    },

    {
      path: "/jobdetails/:id",
      element: (
        <Layout>
          <JobDetails />
        </Layout>
      ),
    },
    {
      path: "/job-creation",
      element: (
        <ProtectedRoute>
          {" "}
          <Layout>
            <JobCreationForm />
          </Layout>
        </ProtectedRoute>
      ),
    },
    {
      path: "/profile",
      element: (
        <ProtectedRoute>
          {" "}
          <Layout>
            <Profile />
          </Layout>
        </ProtectedRoute>
      ),
    },
    {
      path: "/jobedit",
      element: (
        <ProtectedRoute>
          <Layout>
            <JobEdit />
          </Layout>
        </ProtectedRoute>
      ),
    },
    {
      path: "/login",
      element: (
        <Layout>
          <Login />
        </Layout>
      ),
    },
    {
      path: "/register",
      element: (
        <Layout>
          <SignUp />
        </Layout>
      ),
    },
    {
      path: "/saved",
      element: (
        <Layout>
          <SavedJobs />
        </Layout>
      ),
    },
    {
      path: "/admin-job",
      element: (
        <ProtectedRoute>
          {" "}
          <Layout>
            {" "}
            <AdminJob />
          </Layout>
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin-jobdetails/:id",
      element: (
        <ProtectedRoute>
          <Layout>
            <AdminJobDetails />
          </Layout>
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin-jobedit/:id",
      element: (
        <ProtectedRoute>
          {" "}
          <Layout>
            <AdminJobEdit />
          </Layout>
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin-applicants/:id",
      element: (
          <Layout>
            <Applicants />
          </Layout>
        
      ),
    },
  ]);
  return (
    <div className="min-h-screen">
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            width: "400px",
            fontSize: "16px",
            padding: "12px",
            borderRadius: "8px",
            background: "#333",
            color: "#fff",
          },
          success: {
            style: {
              background: "#4CAF50",
            },
          },
          error: {
            style: {
              background: "#FF5733",
            },
          },
        }}
      />
    </div>
  );
};

export default App;
