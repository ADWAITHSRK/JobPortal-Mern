import { FacebookFilled, InstagramFilled, TwitterCircleFilled } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    
       <div className="bg-neutral-700 flex items-center justify-center text-white w-full h-42  bottom-0">
      <div className="grid grid-cols-3 gap-18">
        <div className="col-span-1 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-center">
            Talent<span className="text-[#F83002]">-Hire</span>
          </h1>
          <p className="text-sm mt-1.5">
            Modernizing The Job Search Experience
          </p>
        </div>

        <div className=" text-center col-span-1 flex flex-col items-center justify-center">
          <h1 className="font-bold mb-2">MENU</h1>
          <div className="flex flex-col gap-1">
            <p className="text-sm">
              <Link>About Us</Link>
            </p>
            <p className="text-sm">
              <Link>Contact</Link>
            </p>
            <p className="text-sm">
              <Link>Terms&Conditions</Link>
            </p>
            <p className="text-sm">
              <Link>Privacy Policy</Link>
            </p>
          </div>
        </div>

        <div className=" text-center col-span-1 flex flex-col items-center justify-center">
          <h1 className="font-bold mb-2">FOLLOW US</h1>
          <div className="flex flex-col gap-1.5">
            <p className=" flex gap-2 text-sm text-center ">
              <Link>Instagram<InstagramFilled className="mx-1"/></Link>
            </p>
            <p className=" flex gap-2 text-sm text-center">
              <Link>Facebook<FacebookFilled className="mx-1"/></Link>
            </p>
            <p className=" flex gap-2 text-sm text-center ">
              <Link>Twitter<TwitterCircleFilled className="mx-1"/></Link>
            </p>
            
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default Footer;
