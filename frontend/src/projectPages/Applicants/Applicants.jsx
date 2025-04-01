import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/components/ui/table";
import { useParams } from "react-router-dom";
import { useFindapplicantsQuery } from "../../redux/features/jobApiSlice.js";
import { Select } from "antd";

const Applicants = () => {
  const {id} = useParams()
  console.log(id)
  const {data:application} = useFindapplicantsQuery(id)
  console.log("application",application)
  
  const statusOptions = [
    { value: "accepted", label: "Accepted" },
    { value: "rejected", label: "Rejected" },
  ];
  
  // const statusHandler = async (status, id) => {
  //   console.log("called");
  //   try {
  //     console.log("");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="container mx-auto p-12 mt-5">
      <h1 className="text-center text-2xl mb-8 font-bold">Applicants</h1>
      <Table>
        <TableCaption>Job Applicants</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='font-bold text-xl'>Full Name</TableHead>
            <TableHead className='font-bold text-xl'>Email</TableHead>
            <TableHead className='font-bold text-xl'>Contact</TableHead>
            <TableHead className='font-bold text-xl'>Resume</TableHead>
            <TableHead className='font-bold text-xl'>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            application?.map((item) => (
              <TableRow key={item._id}>
                <TableCell>{item?.applicant?.fullName}</TableCell>
                <TableCell>{item?.applicant?.email}</TableCell>
                <TableCell>{item?.applicant?.phoneNumber}</TableCell>
                <TableCell>
                 { item?.applicant?.profile?.resume ? (
                  <a
                    href={item?.applicant?.profile?.resume}
                    className="text-blue-400 cursor-pointer"
                  >
                    {item?.applicant?.profile?.resumeOriginalName}
                  </a>):(<span>No Resume</span>)}
                </TableCell>
                <TableCell>
                  <Select
                    defaultValue={item?.status || "Pending"}
                    style={{ width: 120 }}
                    options={statusOptions}
                    // onChange={(value) => statusHandler(value, item._id)}
                  />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Applicants;
