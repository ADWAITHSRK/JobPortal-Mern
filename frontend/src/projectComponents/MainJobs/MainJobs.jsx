import React from "react";
import JobCard from "../JobCard/JobCard";

const MainJobs = () => {
    const jobListings = [
        {
          title: "Software Engineer",
          location: "Banglore, India",
          jobType: "Full-time",
          experienceLevel: 2,
          company: {
            name: "Google",
            logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
          },
          createdAt: "2025-03-20T00:00:00Z",
          applications: [1, 2, 3, 4, 5],
        },
        {
          title: "Data Scientist",
          location: "Hyderabad, India",
          jobType: "Contract",
          experienceLevel: 3,
          company: {
            name: "Facebook",
            logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
          },
          createdAt: "2025-03-19T00:00:00Z",
          applications: [1, 2],
        },
        {
          title: "Product Manager",
          location: "Pune, India",
          jobType: "Full-time",
          experienceLevel: 5,
          company: {
            name: "Microsoft",
            logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
          },
          createdAt: "2025-03-18T00:00:00Z",
          applications: [1, 2, 3],
        },
      ];
  return (
    <div className="flex items-center justify-center bh-white mt-6">
      <div className="container flex items-center justify-center mx-auto ">
        <div className="flex flex-col ">
          <h2 className="text-gray-700 text-2xl font-semibold mb-8 text-center">
            📌 Latest Job Openings
          </h2>
          <div className="container mx-auto mt-2">
          <div className="  grid grid-cols-3 gap-8 ">
            {jobListings.map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default MainJobs;
