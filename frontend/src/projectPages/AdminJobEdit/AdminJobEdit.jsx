import React, { useEffect } from "react";
import { Form, Input, InputNumber, Select, Button } from "antd";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router-dom";
import { useFindjobbyidQuery } from "../../redux/features/jobApiSlice.js";
import { useEditjobMutation } from "../../redux/features/jobApiSlice.js";
const { TextArea } = Input;
const { Option } = Select;

const AdminJobEdit = () => {
    const navigate = useNavigate()
  const { id } = useParams();
    const { data: job } = useFindjobbyidQuery(id);
  console.log("job",job)


  const [editjob] = useEditjobMutation()
  const [form] = Form.useForm();
  useEffect(() => {
    if (job) {
      form.setFieldsValue({
        title: job?.title,
        description: job.description,
        requirements: job.requirements.join(','),
        salary: job.salary,
        location: job.location,
        jobType: job.jobType,
        experienceLevel: job.experienceLevel,
        position: job.position,
      });
    }
  }, [job, form]);
 

  const onFinish = async (values) => {
    try {
      const formData = {
        ...values,
        requirements: values.requirements.split(',').map(item => item.trim()), 
        salary: Number(values.salary),
        experienceLevel: Number(values.experienceLevel),
        position: Number(values.position),
      };
  
      const res = await editjob({
        id: id, 
        formData: formData
      }).unwrap();
      console.log(res)
      navigate(`/admin-jobdetails/${id}`);
      toast.success("Job Updated Successfully");
    } catch (error) {
      console.log(error);
      toast.error("Job Update Failed");
    }
  };
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-14">
      <h2 className="text-2xl font-bold mb-4 text-center">Create Job</h2>
      <Form layout="vertical" form={form} onFinish={onFinish} className="w-90 ">
        <Form.Item
          name="title"
          label="Job Title"
          rules={[{ required: true, message: "Please enter job title" }]}
        >
          <Input placeholder="Enter job title" />
        </Form.Item>

        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: "Please enter description" }]}
        >
          <TextArea rows={4} placeholder="Enter job description" />
        </Form.Item>

        <Form.Item
          name="requirements"
          label="Requirements"
          rules={[{ required: true, message: "Please enter requirements" }]}
        >
          <TextArea rows={3} placeholder="Enter job requirements" />
        </Form.Item>

        <Form.Item
          name="salary"
          label="Salary"
          rules={[{ required: true, message: "Please enter salary" }]}
        >
          <Input placeholder="Enter salary" />
        </Form.Item>

        <Form.Item
          name="location"
          label="Location"
          rules={[{ required: true, message: "Please enter location" }]}
        >
          <Input placeholder="Enter location" />
        </Form.Item>

        <Form.Item
          name="jobType"
          label="Job Type"
          rules={[{ required: true, message: "Please select job type" }]}
        >
          <Select placeholder="Select job type">
            <Option value="Full-time">Full-time</Option>
            <Option value="Part-time">Part-time</Option>
            <Option value="Part-time">Contract</Option>
            <Option value="Remote">Remote</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="experienceLevel"
          label="Experience Level (Years)"
          rules={[{ required: true, message: "Please enter experience level" }]}
        >
          <InputNumber
            min={0}
            placeholder="Enter experience level"
            className="w-full"
          />
        </Form.Item>

        <Form.Item
          name="position"
          label="Position"
          rules={[
            { required: true, message: "Please enter number of positions" },
          ]}
        >
          <InputNumber
            min={1}
            placeholder="Enter number of positions"
            className="w-full"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AdminJobEdit;
