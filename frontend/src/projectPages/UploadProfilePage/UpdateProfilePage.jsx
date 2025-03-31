import { File, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import Password from "antd/es/input/Password";
import {
  useUpdateprofileMutation,
  useGetprofileQuery,
} from "../../redux/features/userApiSlice.js";
import { toast } from "sonner";

const UpdateProfile = () => {
  const [updateprofile, { loading }] = useUpdateprofileMutation();
  const { data: user } = useGetprofileQuery();

  const [fl, setFile] = useState(null);
  const [formdata, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    bio: "",
    skills: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        fullName: user.fullName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        bio: user.profile.bio,
        skills: user.profile.skills.join(""),
      });
    }
  }, [user]);

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });
  };

  const handleFileChange = async ({ file }) => {
    console.log("asdfgh",file)
    setFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("fullName", formdata.fullName);
      formData.append("email", formdata.email);
      formData.append("phoneNumber", formdata.phoneNumber);
      formData.append("bio", formdata.bio);
      formData.append("skills", formdata.skills);
      if (fl) {
        formData.append("images", fl);
      }

      const res = await updateprofile(formData).unwrap();
      toast.success("User Updated Successfully");
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        bio: "",
        skills: "",
      });
      setFile(null);
      console.log(res);
    } catch (err) {
      console.log(err);
      toast.error("User Updation Failed");
    }
  };

  return (
    <div class="flex items-center h-screen bg-white  ">
      <div class="w-[450px] h-[500px] border-y-gray-200   flex  flex-col items-center justify-center shadow-xl rounded-lg mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6 ">
          Update Profile
        </h2>
        <form onSubmit={handleSubmit} className="mb-2">
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
            <label htmlFor="bio" className="text-sm font-medium text-gray-700">
              Bio
            </label>
            <input
              type="text"
              name="bio"
              id="bio"
              value={formdata.bio}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-md shadow-sm"
              placeholder="Enter your Bio"
            />
          </div>
          <div>
            <label
              htmlFor="skills"
              className="block text-sm font-medium text-gray-700"
            >
              Skills
            </label>
            <input
              type="text"
              name="skills"
              id="skills"
              value={formdata.skills}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-md shadow-sm"
              placeholder="Enter your Skills With Comma Seperator"
            />
          </div>

          <div className="mt-5">
            <Upload
              style={{ height: "25px" }}
              onChange={handleFileChange}
              beforeUpload={() => false} 
              accept=".pdf,.doc,.docx,image/*"
              showUploadList={true}
            >
              <Button
                icon={<File className="w-4 h-4" />}
                style={{ height: "25px", lineHeight: "25px" }}
              >
                Upload Resume
              </Button>
            </Upload>
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

export default UpdateProfile;
