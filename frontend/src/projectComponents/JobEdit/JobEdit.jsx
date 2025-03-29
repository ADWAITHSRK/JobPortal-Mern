import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import Password from "antd/es/input/Password";
import { useRegisterMutation } from "../../redux/features/userApiSlice.js";
import { toast } from "sonner";

const JobEdit = () => {
  const [register, { loading }] = useRegisterMutation();
  const [file, setFile] = useState(null);
  const [formdata, setFormData] = useState({
    fullName: "",
    email: "",
    requirements: "",
    password: "",
    role: "",
  });

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("fullName", formdata.fullName);
      formData.append("email", formdata.email);
      formData.append("requirements", formdata.requirements);
      formData.append("password", formdata.password);
      formData.append("role", formdata.role);
      if (file) {
        formData.append("image", file);
      }

      const res = await register(formData).unwrap();
      toast.success("User Registered Successfully");
      setFormData({
        fullName: "",
        email: "",
        requirements: "",
        password: "",
        role: "",
      });
      setFile(null);
      console.log(res);
    } catch (err) {
      console.log(err);
      toast.error("User Registration Failed");
    }
  };

  return (
    <div class="flex items-center h-screen bg-white mt-20 ">
      <div class="w-[550px] h-[720px] border-y-gray-200   flex  flex-col items-center justify-center shadow-xl rounded-lg mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6 mt-2">
          Edit the Job
        </h2>
        <form onSubmit={handleSubmit} className="mb-2 w-full p-10">
          <div className="mb-3">
            <label
              htmlFor="title"
              className="text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formdata.title}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-md shadow-sm"
              placeholder="Enter your FullName"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="description"
              className="text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={formdata.description}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-md shadow-sm"
              placeholder="Enter your FullName"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="requirements"
              className="text-sm font-medium text-gray-700"
            >
              Requirements
            </label>
            <input
              type="text"
              name="requirements"
              id="requirements"
              value={formdata.requirements}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-md shadow-sm"
              placeholder="Enter your Rquirmnts with Comma"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="salary"
              className="text-sm font-medium text-gray-700"
            >
              Salary
            </label>
            <input
              type="text"
              name="salary"
              id="salary"
              value={formdata.salary}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
              placeholder="Enter salary range (e.g. $50,000 - $70,000)"
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="location"
              className="text-sm font-medium text-gray-700"
            >
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              value={formdata.location}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
              placeholder="Enter job location"
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="jobType"
              className="text-sm font-medium text-gray-700"
            >
              Job Type
            </label>
            <select
              name="jobType"
              id="jobType"
              value={formdata.jobType}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
            >
              <option value="">Select job type</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="contract">Contract</option>
              <option value="remote">Remote</option>
            </select>
          </div>

          <div className="mb-3">
            <label
              htmlFor="experienceLevel"
              className="text-sm font-medium text-gray-700"
            >
              Experience Level
            </label>
            <input
              type="number"
              name="experienceLevel"
              id="experienceLevel"
              value={formdata.experienceLevel}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
              placeholder="Enter job location"
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="position"
              className="text-sm font-medium text-gray-700"
            >
              Position
            </label>
            <input
              type="text"
              name="position"
              id="position"
              value={formdata.position}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
              placeholder="Enter job position (e.g. Software Engineer)"
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
              <>Update</>
            )}
          </button>
         
        </form>
      </div>
    </div>
  );
};

export default JobEdit;
