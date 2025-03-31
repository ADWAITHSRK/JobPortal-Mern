import React, { useEffect, useState } from "react";
import { Input, Card as AntdCard, Checkbox, Select, Form } from "antd";
import JobCard from "../../projectComponents/JobCard/JobCard.jsx";
import { useFindalljobsQuery } from "../../redux/features/jobApiSlice.js";

const Job = () => {
  const {data:job} = useFindalljobsQuery()
  console.log(job)

  const options = [
    { label: 'Part-Time', value: 'Part-time' },
    { label: 'Full-Time', value: 'Full-time' },
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

  

    setJobs(job)

  },[job])

  useEffect(  ()=> {

    let result = jobs?.filter( (job) => {


      const matchSearch = job?.title.toLowerCase().includes(query.toLowerCase())  || job?.company.name.toLowerCase().includes(query.toLowerCase()) 

      const matchExp = exp === 0 || job.experienceLevel >= exp

      const matchJobType = jobType.length ===  0  || jobType.includes(job?.jobType)

      const  MatchLoc = loc === ' ' || job?.location.toLowerCase().includes(loc.toLowerCase())

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
            {filteredJobs?.map(job => (
              <div key={job?._id} className="mb-5"> <JobCard  job={job} /> </div>
              
            ))}
          </div>

          {filteredJobs?.length === 0 && (
            <div className="text-center text-gray-500 mt-8">
              No jobs found 
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Job;
