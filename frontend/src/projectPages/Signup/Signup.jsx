import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import React from "react";

const Signup = () => {
  const loading = true;
  return (
    <div class="flex items-center h-screen bg-white  ">
      <div class="w-[350px] h-[500px] border-y-gray-200   flex  flex-col items-center justify-center shadow-xl rounded-lg mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6 ">
          Sign Up
        </h2>
        <form className="mb-2">
          <div className="mb-3">
            <label
              htmlFor="fullName"
              className="text-sm font-medium text-gray-700"
            >
              Fullname
            </label>
            <input
              type="name"
              id="fullName"
              className="mt-1 w-full rounded-md shadow-sm"
              placeholder="Enter your FullName"
            />
          </div>
          <div className="mb-3">
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
          <div className="mb-3">
            <label
              htmlFor="phoneNumber"
              className="text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="number"
              id="phoneNumber"
              className="mt-1 w-full rounded-md shadow-sm"
              placeholder="Enter your Phone-number"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="password"
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
          <div className="flex items-center justify-between gap-3">
            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700"
              >
                Role
              </label>
              <select
                id="role"
                className="mt-1 block w-full px-1  border border-gray-300 rounded-md shadow-sm "
                required
              >
                <option className="text-sm" value="">
                  Select your role
                </option>
                <option className="text-sm" value="student">
                  Student
                </option>
                <option className="text-sm" value="recruiter">
                  Recruiter
                </option>
              </select>
            </div>

            <div className="mt-auto">
              <Upload style={{ height: "25px" }}>
                <Button
                  icon={<UploadOutlined />}
                  style={{ height: "25px", lineHeight: "25px" }}
                >
                  Upload Image
                </Button>
              </Upload>
            </div>
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
          <p className="text-center text-sm mt-5 mb-4">
            <span>Already have an Account?</span>{" "}
            <span className="text-sky-500">
              <Link to="">Login</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
