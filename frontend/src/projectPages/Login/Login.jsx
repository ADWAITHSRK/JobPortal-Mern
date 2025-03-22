import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useLoginMutation } from "src/redux/features/userApiSlice";
import Navbar from "../../projectComponents/Navbar/Navbar";

const Login = () => {
  const [login,{loading}] = useLoginMutation()
  const [email ,setEmail] = useState('')
  const [password ,setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      const res = await login({email,password}).unwrap()
      console.log(res)
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div class="flex items-center h-screen bg-white  ">
      <div class="w-[350px] h-[350px] border-y-gray-200   flex  flex-col items-center justify-center shadow-xl rounded-lg mx-auto">
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
