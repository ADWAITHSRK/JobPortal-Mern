import React from "react";
import { useSelector } from "react-redux";
import JobCard from "../../projectComponents/JobCard/JobCard.jsx";

const SavedJobs = () => {
  const savedJobs = useSelector((state) => state.savedJobs.savedJobs);

  return (
    <div className="grid md:grid-cols-5 mx-auto container min-h-screen">
      <div className="md:col-span-1"></div>

      <div className="col-span-1 md:col-span-3">
        <h1 className="text-2xl font-bold text-center mb-4 mt-6">
          Saved Jobs
        </h1>

        {savedJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedJobs.map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-40">
            <span className="text-xl text-gray-800">No Saved Jobs</span>
          </div>
        )}
      </div>

      <div className="md:col-span-1"></div>
    </div>
  );
};

export default SavedJobs;
