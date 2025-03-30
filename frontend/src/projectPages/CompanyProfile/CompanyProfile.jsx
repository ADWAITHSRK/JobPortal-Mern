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
import { Button } from "../../components/components/ui/button";
import { Building, Globe, MapPin, Edit2Icon, IdCard } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CreateCompanyForm from "../CreateCompany/CreateCompany";
import { useGetcompanyQuery } from "../../redux/features/companyApiSlice.js";

const CompanyProfile = () => {
    const {data:company} = useGetcompanyQuery()
    console.log(company)
  const navigate = useNavigate();

  // Sample company data matching your schema
//   const company = {
//     _id: "afa23fwf4gdfg5",
//     name: "Amazon",
//     description:
//       "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
//     website: "https://www.amazon.com",
//     location: "Seattle, Washington, USA",
//     logo: "https://seekvectors.com/files/download/Amazon-Logo-07.png",
//     userId: "user123",
//     createdAt: "2025-01-15T09:30:00Z",
//     updatedAt: "2025-03-25T14:45:00Z",
//   };

  if (!company || company.length === 0) return <CreateCompanyForm />;

  return (
    <div className="min-h-screen bg-white py-10 px-6 flex justify-center">
      <Card className="max-w-3xl w-full shadow-lg">
        <CardHeader className="flex flex-col items-center">
          <Avatar className="w-28 h-28 shadow-lg border">
            <AvatarImage src={company.logo} alt={company.name} />
            {/* <AvatarFallback>
              {company.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback> */}
          </Avatar>
          <CardTitle className="text-2xl font-bold mt-3 flex items-center gap-2">
            {company.name}
          </CardTitle>
          <p className="text-gray-500 text-sm">
            Id: {company._id}
          </p>
          <p className="text-gray-500 text-sm font-bold">
            Joined: {new Date(company.createdAt).toLocaleDateString()}
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-4 border-b pb-4">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-green-600" />
              <p className="text-gray-700">{company.location}</p>
            </div>

            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-blue-600" />
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {company.website}
              </a>
            </div>
            
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p className="text-gray-600">{company.description}</p>
          </div>

          <div className="flex justify-center">
            <Button
              onClick={() => navigate("/company-update")}
              variant="outline"
              className="flex items-center gap-2 text-center"
            >
              <Edit2Icon className="w-4 h-4" />
              Edit Company Profile
            </Button>
          </div>

          <p className="text-sm text-gray-500 text-center">
            Last updated: {new Date(company.updatedAt).toLocaleDateString()}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyProfile;
