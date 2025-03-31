import React from "react";
import { Link } from "react-router-dom";
import { Button, Avatar } from "antd";
import { useGetprofileQuery } from "../../redux/features/userApiSlice.js";
import { useLogoutMutation } from "../../redux/features/userApiSlice.js";
import { UserOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Popover, Space } from "antd";
import { toast } from "sonner";


const Navbar = () => {
  const [logout] = useLogoutMutation()
  const navigate = useNavigate()
  const location = useLocation();
  const { data: user } = useGetprofileQuery();
  console.log("The User is", user);
  
  const logoutFunction = async() => {
    await logout().unwrap()
    toast.success('Logout SuccesFully')
    navigate('/')
  }
  const content = (
  
    <div className="flex justify-center items-center">
      <div className="flex flex-col gap-2">
        <Button onClick={()=>navigate('/profile')}>Profile</Button>
        <Button onClick={logoutFunction}>Logout</Button>
      </div>
    </div>
  );

  return (
    <div className="bg-white shadow-sm px-6">
      <div className=" flex items-center justify-between max-w-6xl mx-auto h-18 px-2">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
            Talent<span className="text-[#F83002]">-Hire</span>
          </h1>{" "}
        </div>
        <div className="flex items-center gap-8">
          <div>
            <ul className="flex gap-4">
              {user && user.role === "recruiter" ? (
                <>
                  <li>
                    <Link to='/admin-job'  className={
                        location.pathname.startsWith("/admin-job")  ||location.pathname.startsWith('/admin-jobdetails')
                          ? "underline text-blue-500"
                          : ""
                      }>My-Jobs</Link>
                  </li>
                  <li>
                    <Link
                      className={
                        location.pathname === "/job-creation"
                          ? "underline text-blue-500"
                          : ""
                      }
                      to='/job-creation'
                    >
                      Create-Jobs
                    </Link>
                  </li>
                  <li>
                    <Link to="/company-profile"  className={
                        location.pathname === "/company-profile"
                          ? "underline text-blue-500"
                          : ""
                      }>Company</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link>Home</Link>
                  </li>
                  <li>
                    <Link>Jobs</Link>
                  </li>
                  <li>
                    <Link>Saved</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div>
            {!user ? (
              <>
                <div className="flex items-center gap-3">
                  <Button>
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button>
                    <Link to="/register">Sign-Up</Link>
                  </Button>
                </div>
              </>
            ) : (
              <>
                <Space wrap>
                  <Popover
                    content={content}
                    title="User-Profile"
                    trigger="click"
                  >
                    <Avatar icon={<UserOutlined />} />
                  </Popover>
                </Space>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
