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

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout><Home /></Layout> ,
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
      element: <Login />,
    },
    {
      path: "/register",
      element: <SignUp />,
    },
    {
      path: "/saved",
      element: <SavedJobs />,
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
