import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./projectComponents/Navbar/Navbar";
import Login from "./projectPages/Login/Login";
import SignUp from "./projectPages/Signup/Signup";
import Home from "./projectPages/Home/Home";
import { Toaster } from "./components/components/ui/sonner";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <SignUp />,
    },
  
  ]);
  return (
    <div>
      <RouterProvider router={router} />
      <Toaster position='top-center'/>
    </div>
  );
};

export default App;
