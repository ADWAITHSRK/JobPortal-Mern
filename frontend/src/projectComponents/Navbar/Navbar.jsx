import React from "react";
import { Link } from "react-router-dom";
import { Button ,Avatar} from 'antd';
import { useGetprofileQuery } from "../../redux/features/userApiSlice.js";
import { UserOutlined } from '@ant-design/icons';

const Navbar = () => {
  const {data:user} = useGetprofileQuery()
  console.log('The User is',user)
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
                    <Link to='/company-profile'>Companie</Link>
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
                        <Link to='/login'>Login</Link>
                    </Button>
                    <Button>
                        <Link to='/register' >Sign-Up</Link>
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
