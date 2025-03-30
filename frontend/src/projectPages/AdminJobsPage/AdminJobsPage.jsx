import React, { useEffect, useState } from "react";
import { Input, Card as AntdCard, Checkbox, Select, Form } from "antd";
import AdminJobCard from "../../projectComponents/AdminJobCard/AdminJobCard";
const AdminJob = () => {

  const options = [
    { label: 'Internship', value: 'Internship' },
    { label: 'Full-Time', value: 'Full-Time' },
    { label: 'Contract', value: 'Contract' },
    { label: 'Remote', value: 'Remote' },
  ];
  
  


  const [jobs , setJobs ] = useState([])
  const [filteredJobs ,setFilteredJobs] = useState([])
  const [exp , setExp ] = useState(0)
  const [jobType , setJobType]  =useState([])
  const [query  , setQuery] = useState('')
  const [loc  , setLoc] = useState('')

  useEffect ( ()=> {

    const mock = [
      {
        _id: "1",
        title: "Software Engineer",
        location: "Mountain View, USA",
        jobType: "Full-Time",
        experienceLevel: 3,
        company: {
          name: "Google",
          logo: "https://cdn.worldvectorlogo.com/logos/google-2015.svg",
        },
        createdAt: new Date().toISOString(),
        applications: [],
      },
      {
        _id: "2",
        title: "Frontend Developer",
        location: "Remote",
        jobType: "Contract",
        experienceLevel: 1,
        company: {
          name: "Spotify",
          logo: "https://cdn.worldvectorlogo.com/logos/spotify-1.svg",
        },
        createdAt: new Date().toISOString(),
        applications: [],
      },
      {
        _id: "3",
        title: "Data Scientist",
        location: "Los Gatos, USA",
        jobType: "Full-Time",
        experienceLevel: 5,
        company: {
          name: "Netflix",
          logo: "https://cdn.worldvectorlogo.com/logos/netflix-3.svg",
        },
        createdAt: new Date().toISOString(),
        applications: [],
      },
      {
        _id: "4",
        title: "DevOps Engineer",
        location: "Seattle, USA",
        jobType: "Full-Time",
        experienceLevel: 2,
        company: {
          name: "Microsoft",
          logo: "https://cdn.worldvectorlogo.com/logos/microsoft-2.svg",
        },
        createdAt: new Date().toISOString(),
        applications: [],
      },
      {
        _id: "5",
        title: "Mobile Developer",
        location: "Cupertino, USA",
        jobType: "Internship",
        experienceLevel: 0,
        company: {
          name: "Apple",
          logo: "https://cdn.worldvectorlogo.com/logos/apple-black.svg",
        },
        createdAt: new Date().toISOString(),
        applications: [],
      },
      {
        _id: "6",
        title: "UX Designer",
        location: "Berlin, Germany",
        jobType: "Remote",
        experienceLevel: 4,
        company: {
          name: "Adobe",
          logo: "https://cdn.worldvectorlogo.com/logos/adobe-2.svg",
        },
        createdAt: new Date().toISOString(),
        applications: [],
      },
      {
        _id: "7",
        title: "Backend Developer",
        location: "Bangalore, India",
        jobType: "Full-Time",
        experienceLevel: 2,
        company: {
          name: "Flipkart",
          logo: "https://cdn.worldvectorlogo.com/logos/flipkart-1.svg",
        },
        createdAt: new Date().toISOString(),
        applications: [],
      },
      {
        _id: "8",
        title: "Cloud Architect",
        location: "Dublin, Ireland",
        jobType: "Contract",
        experienceLevel: 6,
        company: {
          name: "IBM",
          logo: "https://cdn.worldvectorlogo.com/logos/ibm-1.svg",
        },
        createdAt: new Date().toISOString(),
        applications: [],
      },
      {
        _id: "9",
        title: "AI Engineer",
        location: "San Francisco, USA",
        jobType: "Full-Time",
        experienceLevel: 3,
        company: {
          name: "OpenAI",
          logo: "https://cdn.worldvectorlogo.com/logos/openai-2.svg",
        },
        createdAt: new Date().toISOString(),
        applications: [],
      },
      {
        _id: "10",
        title: "Cybersecurity Analyst",
        location: "Washington DC, USA",
        jobType: "Remote",
        experienceLevel: 4,
        company: {
          name: "Cisco",
          logo: "https://cdn.worldvectorlogo.com/logos/cisco-2.svg",
        },
        createdAt: new Date().toISOString(),
        applications: [],
      },
      {
        _id: "11",
        title: "Game Developer",
        location: "Tokyo, Japan",
        jobType: "Full-Time",
        experienceLevel: 2,
        company: {
          name: "Sony",
          logo: "https://cdn.worldvectorlogo.com/logos/sony-6.svg",
        },
        createdAt: new Date().toISOString(),
        applications: [],
      },
      {
        _id: "12",
        title: "Blockchain Developer",
        location: "Zurich, Switzerland",
        jobType: "Contract",
        experienceLevel: 3,
        company: {
          name: "Ethereum Foundation",
          logo: "https://cdn.worldvectorlogo.com/logos/ethereum-1.svg",
        },
        createdAt: new Date().toISOString(),
        applications: [],
      },
      {
        _id: "13",
        title: "QA Engineer",
        location: "Austin, USA",
        jobType: "Internship",
        experienceLevel: 0,
        company: {
          name: "Dell",
          logo: "https://cdn.worldvectorlogo.com/logos/dell-2.svg",
        },
        createdAt: new Date().toISOString(),
        applications: [],
      },
      {
        _id: "14",
        title: "Product Manager",
        location: "London, UK",
        jobType: "Full-Time",
        experienceLevel: 5,
        company: {
          name: "Meta",
          logo: "https://cdn.worldvectorlogo.com/logos/meta-1.svg",
        },
        createdAt: new Date().toISOString(),
        applications: [],
      },
      {
        _id: "15",
        title: "Technical Writer",
        location: "Sydney, Australia",
        jobType: "Remote",
        experienceLevel: 1,
        company: {
          name: "Atlassian",
          logo: "https://cdn.worldvectorlogo.com/logos/atlassian-1.svg",
        },
        createdAt: new Date().toISOString(),
        applications: [],
      },
    ];

    setJobs(mock)

  },[])

  useEffect(  ()=> {

    let result = jobs.filter( (job) => {


      const matchSearch = job.title.toLowerCase().includes(query.toLowerCase())  || job.company.name.toLowerCase().includes(query.toLowerCase()) 

      const matchExp = exp === 0 || job.experienceLevel >= exp

      const matchJobType = jobType.length ===  0  || jobType.includes(job.jobType)

      const  MatchLoc = loc === ' ' || job.location.toLowerCase().includes(loc.toLowerCase())

      return matchSearch && matchExp && matchJobType && MatchLoc
    }


    )
    setFilteredJobs(result)

  },[query , exp , jobType , loc, jobs ])


  
  return (
    <div className="container mx-auto p-6">
      <div className="mb-12 w-3/4 mx-auto">
        <Input
          size="large"
          placeholder="Search Jobs..."
          className=" rounded-lg shadow-sm"
          value={query}
          onChange={(e)=>setQuery(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 container mx-auto">
        <div className="md:col-span-1">
          <AntdCard title="Filters" className="shadow-sm">
            <Form layout="vertical">
              <Form.Item label="Job Type">
              <Checkbox.Group options={options} defaultValue={['Internship']} value={jobType} onChange={(values)=>setJobType(values)} />
              <br />
              </Form.Item>

              <Form.Item label="Experience Level">
                <Select placeholder="Select Experience Level"  value={exp} onChange={(value)=> setExp(value)} >
                  <Select.Option value={0}>Entry Level</Select.Option>
                  <Select.Option value={1}>1+ Years</Select.Option>
                  <Select.Option value={3}>3+ Years</Select.Option>
                  <Select.Option value={5}>5+ Years</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item label="Location">
                <Input placeholder="Location"  value={loc} onChange={(e)=> setLoc(e.target.value)}/>
              </Form.Item>
            </Form>
          </AntdCard>
        </div>
       
        <div className="md:col-span-3 container mx-auto ">
          <div className="grid md:grid-cols-3  gap-4 container mx-auto">
            {filteredJobs.map(job => (
              <div key={job._id} className="mb-5"> <AdminJobCard  job={job} /> </div>
              
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center text-gray-500 mt-8">
              No jobs found 
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default AdminJob;
