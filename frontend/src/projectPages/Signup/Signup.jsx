import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import Password from "antd/es/input/Password";
import { useRegisterMutation } from "../../redux/features/userApiSlice.js";
import { toast } from "sonner"

const Signup = () => {
  const [register , {loading}] = useRegisterMutation();
  const [file , setFile] = useState(null)
  const [formdata ,setFormData] = useState({
    fullName : '',
    email : '',
    phoneNumber : '',
    password : '',
    role : '',
  })

  const handleInputChange = async (e) =>{
    const {name ,value} = e.target
    setFormData(({...formdata ,[name]:value}))
  }

  const handleFileChange = async ({file}) => {
    setFile(file);
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const formData = new FormData();
      formData.append('fullName', formdata.fullName);
      formData.append('email', formdata.email);
      formData.append('phoneNumber', formdata.phoneNumber);
      formData.append('password', formdata.password);
      formData.append('role', formdata.role);
      if(file) {
        formData.append('image', file);
      }
  
      const res = await register(formData).unwrap()
      toast.success("User Registered Successfully")
      setFormData({
        fullName : '',
        email : '',
        phoneNumber : '',
        password : '',
        role : '',})
        setFile(null)
      console.log(res)
    }
    catch(err){
      console.log(err)
      toast.error("User Registration Failed")
    }
  }

  return (
    <div class="flex items-center h-screen bg-white  ">
      <div class="w-[450px] h-[500px] border-y-gray-200   flex  flex-col items-center justify-center shadow-xl rounded-lg mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6 ">
          Sign Up
        </h2>
        <form  onSubmit={handleSubmit} className="mb-2">
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
              name="fullName"
              value={formdata.fullName}
              onChange={handleInputChange}
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
              name="email"
              id="email"
              value={formdata.email}
              onChange={handleInputChange}
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
              name="phoneNumber"
              id="phoneNumber"
              value={formdata.phoneNumber}
              onChange={handleInputChange}
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
              name="password"
              id="password"
              value={formdata.password}
              onChange={handleInputChange}
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
                name="role"
                value={formdata.role}
              onChange={handleInputChange}
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

            <div className="mt-auto">
              <Upload style={{ height: "25px" }} onChange={handleFileChange}
                beforeUpload={() => false} // Prevent automatic upload
                accept="image/*"
                showUploadList={true}>
                  
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
              <>Sign Up</>
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
