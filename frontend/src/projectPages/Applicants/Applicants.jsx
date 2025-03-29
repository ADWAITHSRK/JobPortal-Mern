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

const Applicants = () => {
  const job = {};
  const statusOptions = ["Accepted", "Rejected"];

  const statusHandler = async (status, id) => {
    console.log("called");
    try {
      console.log("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Table>
        <TableCaption>Job Applicants</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Full Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Resume</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {job &&
            job?.application?.map((item) => (
              <TableRow key={item._id}>
                <TableCell>item?.applicant?.fullName</TableCell>
                <TableCell>item?.applicant?.email</TableCell>
                <TableCell>item?.applicant?.contact</TableCell>
                <TableCell>
                  item?.applicant?.profile?.resume ?{" "}
                  <a
                    href={item?.applicant?.profile?.resume}
                    className="text-blue-400 cursor-pointer"
                  >
                    {item?.applicant?.profile?.resumeOriginalName}
                  </a>
                </TableCell>
                <TableCell>
                  <Select
                    defaultValue={item.status || "Pending"}
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
