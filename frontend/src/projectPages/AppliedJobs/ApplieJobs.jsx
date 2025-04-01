import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/components/ui/table.jsx";
import { useMyapplicationsQuery } from "../../redux/features/applicationSlice.js";
import { Link } from "react-router-dom";

const ApplieJobs = () => {
    const {data:jobs} = useMyapplicationsQuery()
  return (
    <div className="container mx-auto min-h-screen">
        <h1 className="text-center text-2xl text-gray-900 font-bold mt-4">Applied Jobs</h1>
      <div className="flex items-center justify-center mt-5 p-6">
        <Table>
          <TableCaption></TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className='font-bold text-lg'>Job Title</TableHead>
              <TableHead className='font-bold text-lg'>Company</TableHead>
              <TableHead className='font-bold text-lg'>Location</TableHead>
              <TableHead className='font-bold text-lg'>Job Type</TableHead>
              <TableHead className='font-bold text-lg'>Salary</TableHead>
              <TableHead className='font-bold text-lg'>Status</TableHead>
              <TableHead className='font-bold text-lg'>Applied On</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobs?.map((item) => (
              <TableRow key={item?._id}>
                <TableCell className="font-medium hover:text-blue-400"><Link to={`/jobdetails/${item?.job?._id}`}>{item?.job?.title}</Link></TableCell>
                <TableCell>{item?.job?.company?.name}</TableCell>
                <TableCell>{item?.job?.location}</TableCell>
                <TableCell>{item?.job?.jobType}</TableCell>
                <TableCell>{item?.job?.salary}</TableCell>
                <TableCell>{item?.status}</TableCell>
                <TableCell>
                  {new Date(item?.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={6}>Total Applications</TableCell>
              <TableCell className="text-start font-bold">{jobs?.length}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default ApplieJobs;
