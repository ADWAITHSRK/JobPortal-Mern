import React from "react";
import { Link } from "react-router-dom";
import { Button ,Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Navbar = () => {
    const user = {
        role: 'applicant', // Change this to 'student' to test the other condition
        fullname: 'John Doe',
        profile: {
            profilePhoto: 'https://example.com/profile.jpg',
            bio: 'Recruiter at JobPortal',
        },
    };
  return (
    <div className="bg-white shadow-sm px-6">
      <div className=" flex items-center justify-between max-w-6xl mx-auto h-18 px-2">
        <div>
        <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
  Talent<span className="text-[#F83002]">-Hire</span>
</h1>        </div>
        <div className="flex items-center gap-8">
          <div>
            <ul className="flex gap-4">
              {user && user.role === "recruiter" ? (
                <>
                  <li>
                    <Link>Companies</Link>
                  </li>
                  <li>
                    <Link>Jobs</Link>
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
            {
                !user ? (<>
                    <div className="flex items-center gap-3">
                    <Button>
                        <Link>Login</Link>
                    </Button>
                    <Button>
                        <Link>Sign-Up</Link>
                    </Button>
                    </div>
                </>
                ):(
                    <>
                        <Avatar size={40} icon={<UserOutlined />} />
                    </>
                )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
