import React from "react";
import { Avatar, Card, Image, Tag, Button } from "antd";
import {
  Bookmark,
  BookmarkCheckIcon,
  BookmarkX,
  LucideBookmarkX,
  Star,
} from "lucide-react";

// const job = {
//   title: "Programmer Analyst",
//   location: "Hyderabad, India",
//   jobType: "Internship",
//   experienceLevel: 0,
//   company: {
//     name: "Amazon",
//     logo: "https://seekvectors.com/files/download/Amazon-Logo-07.png",
//   },
//   createdAt: "2025-03-21T00:00:00Z",
//   applications: [1, 2, 3, 4], // Example count
// };

const AdminJobCard = ({ job }) => {
 


  return (
    <div className="">
      <Card className=" container w-62 h-75 p-5 radius-10 shadow-md flex justify-center items-center  ">
        <div className="flex flex-col ">
          <div className="flex items-center justify-between">
            <img
              src={job.company.logo || "https://via.placeholder.com/40"}
              alt="Company Logo"
              className="w-14 h-14 rounded-full"
            />

            <Bookmark className="w-6 h-6" />
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold mt-2 text-blue-600">
              {job.title}
            </h2>

            <p className="text-gray-700 font-bold">{job.company.name}</p>
            <p className="text-gray-500 text-sm">{job.location}</p>
          </div>

          <div className="flex flex-wrap gap-2 mt-3">
            <Tag
              color="blue"
              className=" font-bold text-sm px-3 py-1 rounded-md"
            >
              {job.jobType}
            </Tag>
            <Tag color="green" className="text-xs px-2 py-1 rounded-md">
              {job.experienceLevel === 0
                ? "Entry Level"
                : `${job.experienceLevel} yrs Exp`}
            </Tag>
          </div>
          <div className="text-xs text-gray-500 mt-3 mb-4">
            {new Date(job.createdAt).toDateString()} |{" "}
            <span className="text-blue-600 cursor-pointer">
              {job.applications.length} applicants
            </span>
          </div>
          <div className="flex justify-between items-center mb-3">
            <Button
              style={{
                backgroundColor: "#e5e7eb", // bg-gray-200
                borderBottom: "1px solid white",
                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
              }}
            >
              Details
            </Button>

            <Button
              onClick={''}
              disabled={''}
              style={{ backgroundColor: "#fde68a" }} // bg-amber-200
            >
              Edit
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AdminJobCard;
