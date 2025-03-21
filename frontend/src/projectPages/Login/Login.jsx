import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";

const Login = () => {
  const loading = false;
  return (
    <div class="flex items-center h-screen bg-white  ">
      <div class="w-[350px] h-[350px] border-y-gray-200   flex  flex-col items-center justify-center shadow-xl rounded-lg mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8 ">
          Login
        </h2>
        <form className="mb-6">
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
  );
};

export default Login;
