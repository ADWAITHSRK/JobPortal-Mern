import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useLoginMutation } from "../../redux/features/userApiSlice.js";
import Navbar from "../../projectComponents/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "sonner";

const Login = () => {
  const [login,{loading}] = useLoginMutation()
  const [email ,setEmail] = useState('')
  const [password ,setPassword] = useState('')
  const [role ,setRole] = useState('')
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      const res = await login({email,password,role}).unwrap()
      navigate('/')
      toast.success("User Logged In Successfully")
      setEmail('')
      setPassword('')
      setRole('')
      console.log(res)
    }
    catch(err){
      toast.error("User Login Failed")
      console.log(err)
    }
  }

  return (
    <div className="flex flex-col h-screen">
      <div class="flex items-center h-screen bg-white  ">
      <div class="w-[400px] h-[450px] border-y-gray-200   flex  flex-col items-center justify-center shadow-xl rounded-lg mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8 ">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="mt-1 w-full rounded-md shadow-sm"
              placeholder="Enter your Mail"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="mt-1 w-full rounded-md shadow-sm"
              placeholder="Enter your Password"
            />
          </div>
          <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700"
              >
                Role
              </label>
              <select
                id="role"
                name="role"
                value={role}
              onChange={(e)=>setRole(e.target.value)}
                className="mt-1 block w-full px-1  border border-gray-300 rounded-md shadow-sm "
                required
              >
                <option className="text-sm" value="">
                  Select your role
                </option>
                <option className="text-sm" value="applicant">
                  applicant
                </option>
                <option className="text-sm" value="recruiter">
                  recruiter
                </option>
              </select>
            </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center bg-[#54a3f8] hover:bg-[rgb(105,128,187)] mt-8 rounded-sm"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" />
              </>
            ) : (
              <>Login</>
            )}
          </button>
          <p className="text-center text-sm mt-5"><span>Dont have an Account?</span> <span className="text-sky-500"><Link to =''>Sign-Up</Link></span></p>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
