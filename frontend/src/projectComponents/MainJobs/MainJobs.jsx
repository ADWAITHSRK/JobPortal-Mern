import React from "react";
import JobCard from "../JobCard/JobCard";
import { useFindalljobsQuery } from "../../redux/features/jobApiSlice.js";

const MainJobs = () => {
  const { data: jobs } = useFindalljobsQuery();
  let jobListings = [];
  let i = 0;
  
  while (i < jobs?.length && jobListings.length < 3) {
    if (jobListings.length === 0 || 
        jobs[i]?.company?.name !== jobListings[jobListings.length-1]?.company?.name) {
      jobListings.push(jobs[i]);
    }
    i++;
  }
   console.log(jobs)
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
