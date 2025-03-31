import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/components/ui/avatar";
import { Badge } from "../../components/components/ui/badge";
import { Button } from "../../components/components/ui/button";
import { Button as Btn } from "antd";
import {
  Mail,
  Phone,
  FileText,
  Building,
  Edit2Icon,
  DeleteIcon,
  Delete,
  LucideDelete,
  Edit,
} from "lucide-react";
import { Navigate, useNavigate } from "react-router-dom";
import { DeleteOutlined } from "@ant-design/icons";
import { useGetprofileQuery } from "../../redux/features/userApiSlice.js";
import { useGetcompanyQuery } from "../../redux/features/companyApiSlice.js";

const Profile = () => {
  const { data: user, isLoading, error } = useGetprofileQuery();
  const { data: company } = useGetcompanyQuery();
  const navigate = useNavigate();
  console.log(company);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading profile</p>;
  if (!user) return <p>No user data available</p>;

  // const user = {
  //   fullName: "Adwaith Krishnan",
  //   email: "adwaithkrishnan@example.com",
  //   phoneNumber: "+91 9876543210",
  //   password: "hashed_password_here",
  //   role: "recruiter",
  //   profile: {
  //     bio: "A passionate full-stack developer with expertise in MERN stack.",
  //     skills: ["TypeScript", "Node.js", "React", "Tailwind CSS"],
  //     resume: "resume_adwaith.pdf",
  //     resumeOriginalName: "Adwaith_Resume.pdf",
  //     company: {
  //       name: "Amazon",
  //       logo: "https://seekvectors.com/files/download/Amazon-Logo-07.png",
  //     },
  //     profilePhoto: "profile_adwaith.png",
  //   },
  //   createdAt: "2025-03-20T14:30:00Z",
  //   updatedAt: "2025-03-22T10:15:00Z",
  // };

  return (
    <div className="min-h-screen bg-white py-10 px-6 flex justify-center">
      <Card className="max-w-3xl w-full shadow-lg">
        {/* Profile Header */}
        <CardHeader className="flex flex-col items-center">
          <div className="flex flex-col gap-4">
            <Avatar className="w-28 h-28 shadow-lg border">
              <AvatarImage
                src={user.profile.profilePhoto}
                alt={user.fullName}
              />
              {/* <AvatarFallback>
              {user.fullName
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback> */}
            </Avatar>
            <Button
              size="lg"
              className="cursor-pointer"
              onClick={() => navigate("/update-profile")}
            >
              <Edit size="xl" />
            </Button>
          </div>

          <CardTitle className="text-2xl font-bold mt-3">
            {user.fullName}
          </CardTitle>
          <p className="text-gray-500 text-sm">
            Joined: {new Date(user.createdAt).toLocaleDateString()}
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-3 border-b pb-4">
            <p className="text-gray-700 flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-600" /> {user.email}
            </p>
            <p className="text-gray-700 flex items-center gap-2">
              <Phone className="w-5 h-5 text-green-600" /> {user.phoneNumber}
            </p>
          </div>

          {/* Role-Specific Content */}
          {user.role === "applicant" ? (
            <>
              <div>
                <h3 className="text-lg font-semibold">Bio</h3>
                <p className="text-gray-600">{user.profile.bio}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Skills</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {user.profile.skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="px-3 py-1 text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <hr />
            </>
          ) : !company ? (
            <div className="flex justify-center items-center mt-12">
              <Button className="bg-gray-400">Create Company</Button>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between gap-4 mt-3 mb-6">
                <div>
                  <div className="flex gap-2 ">
                    <img
                      src={company?.logo}
                      alt={`${company?.name} logo`}
                      className="w-16 h-16 object-contain rounded-md border"
                    />
                    <div className="flex flex-col justify-between">
                      <Button
                        onClick={() => navigate("/company-update")}
                        size="small"
                        className="flex items-center justify-center !p-0 !h-6 !w-6 cursor-pointer"
                      >
                        <Edit2Icon className="w-3 h-3" />
                      </Button>
                      <Button
                        size="small"
                        className="flex items-center justify-center"
                      >
                        <DeleteOutlined />
                      </Button>
                    </div>
                  </div>

                  <span className="text-sm mt-2.5 flex text-gray-800">
                    <p className="text-gray-700">ID:</p>
                    {company._id}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">{company?.name}</h3>
                </div>
              </div>
              <hr />
            </div>
          )}

          {user.role === "applicant" && (
            <div className="">
              <h3 className="text-lg font-semibold">Resume</h3>
              <Button asChild variant="default" className="gap-2">
                <a
                  href={user.profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <FileText className="h-4 w-4" />
                  View Resume
                </a>
              </Button>
            </div>
          )}

          <p className="text-sm text-gray-500 text-center">
            Last updated: {new Date(user.updatedAt).toLocaleDateString()}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
