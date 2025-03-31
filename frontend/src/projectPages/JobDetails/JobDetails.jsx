import React, { useState } from "react";
import { Card, Tag, Divider } from "antd";
import { Bookmark, MapPin, Briefcase, Calendar, Building } from "lucide-react";
import { Button } from "../../components/components/ui/button";

const JobDetails = () => {
  const [job] = useState({
    id: "1",
    title: "Programmer Analyst",
    description:
      "We are seeking a skilled Programmer Analyst to join our dynamic team. You will be responsible for designing, developing, and maintaining cutting-edge software solutions that enhance our platform's capabilities. Collaborate with cross-functional teams to deliver high-quality, scalable applications.",
    requirements: ["JavaScript", "React", "Redux", "Node.js", "Problem-solving skills"],
    salary: "60,000 - 80,000",
    experienceLevel: 0,
    location: "Hyderabad, India",
    jobType: "Internship",
    position: 2,
    createdAt: "2025-03-21T00:00:00Z",
    company: {
      name: "Amazon",
      logo: "https://seekvectors.com/files/download/Amazon-Logo-07.png",
      description: "A leading global e-commerce and technology company.",
      website: "https://www.amazon.com",
    },
    benefits: ["Health Insurance", "Flexible Work Hours", "Learning Stipend"],
  });

  return (
    <div className="min-h-screen mt-12">
      <div className="container mx-auto px-4 md:max-w-full">
        <Card className="md:w-full mx-auto shadow-md rounded-lg p-6 md:p-8">
          {/* Job Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-4">
              <img
                src={job.company.logo || "https://via.placeholder.com/50"}
                alt={`${job.company.name} Logo`}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full object-contain border border-gray-200"
              />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{job.title}</h1>
                <p className="text-lg text-gray-700 font-medium">{job.company.name}</p>
                <a
                  href={job.company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  Visit Company Website
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="flex items-center gap-2">
                <Bookmark className="w-5 h-5" /> Save Job
              </Button>
              <Button className="bg-blue-600 text-white px-6 py-2">Apply Now</Button>
            </div>
          </div>

          {/* Job Meta Info */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Tag color="blue" className="text-sm py-1 px-2">
              {job.jobType}
            </Tag>
            <Tag color="green" className="text-sm py-1 px-2">
              {job.experienceLevel === 0 ? "Entry Level" : `${job.experienceLevel} yrs Exp`}
            </Tag>
            <Tag color="purple" className="text-sm py-1 px-2">
              {job.position} Openings
            </Tag>
          </div>

          {/* Job Details */}
          <div className="mt-4 text-gray-600 space-y-2">
            <p className="flex items-center gap-2">
              <MapPin size={16} /> {job.location}
            </p>
            <p className="flex items-center gap-2">
              <Briefcase size={16} /> {job.jobType}
            </p>
            <p className="flex items-center gap-2">
              <Calendar size={16} /> Posted on {new Date(job.createdAt).toDateString()}
            </p>
            <p className="flex items-center gap-2">
              <Building size={16} /> {job.company.name}
            </p>
          </div>

          <Divider className="my-6" />

          <div>
            <h2 className="text-xl font-semibold text-gray-800 underline">About the Job</h2>
            <p className="text-gray-700 mt-3 leading-relaxed">{job.description}</p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800 underline">Requirements</h2>
            <ul className="list-disc ml-5 mt-3 text-gray-700 space-y-1">
              {job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>

          
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800 underline">Benefits</h2>
            <ul className="list-disc ml-5 mt-3 text-gray-700 space-y-1">
                <li>Health Insurance</li>
                <li>Flexible Work Hours</li>
                <li>Learing Stipend</li>
            </ul>
          </div>

          
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800 underline">Salary</h2>
            <p className="text-gray-800 font-bold text-lg mt-2">💰 ${job.salary} / year</p>
          </div>

          
          <div className="mt-8 flex flex-col md:flex-row gap-4">
            <Button className="bg-blue-600 text-white w-full md:w-auto px-8 py-2">
              Apply Now
            </Button>
            <Button variant="outline" className="w-full md:w-auto px-8 py-2">
              Share Job
            </Button>
          </div>

          {/* Company Info */}
          <Divider className="my-6" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">About {job.company.name}</h2>
            <p className="text-gray-700 mt-3">{job.company.description}</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default JobDetails;