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
import { useUpdateMutation } from "../../redux/features/applicationSlice.js";
import { Select } from "antd";
import { toast } from "sonner";

const Applicants = () => {
  const [update] = useUpdateMutation()
  const {id} = useParams()
  console.log(id)
  const {data:application} = useFindapplicantsQuery(id)
  console.log("application",application)
  
  const statusOptions = [
    { value: "accepted", label: "Accepted" },
    { value: "rejected", label: "Rejected" },
    { value: "pending", label: "Pending" },
  ];
  
  const statusHandler = async (status, id) => {
  
    try {
    const res = await update({status,id}).unwrap()
    toast.success("Status Updated")
    console.log(res)
    } catch (error) {
      console.log(error)
      toast.error("Status Updation Failed")
    }
  };

  return (
    <div className="container mx-auto p-12 mt-5">
      <h1 className="text-center text-2xl mb-8 font-bold">Applicants</h1>
      <Table>
        <TableCaption></TableCaption>
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
                    onChange={(value) => statusHandler(value, item._id)}
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
