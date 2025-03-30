import React, { useState } from 'react';
import { useRegcompanyMutation } from '../../redux/features/companyApiSlice';
import { toast,Toaster } from 'sonner';

const CreateCompanyForm = () => {
    const [regcompany ] = useRegcompanyMutation()
    const [formData, setFormData] = useState({
        name: '',
        images: null
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            images: e.target.files[0]
        });
    };

    const handleSubmit =async (e) => {
        e.preventDefault();
        try {
            const res = await regcompany({ companyName: formData.name, images: formData.images }).unwrap()
            console.log(res)
            toast.success("Company Created SuccesFully")
        }
        catch(error){
            console.log(error)
            toast.error("Company Creation Failed")
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-12">
            <h2 className="text-xl font-semibold mb-6 text-center ">Create Company</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Company Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
                

                
                <div className="mb-4">
                    <label htmlFor="images" className="block text-sm font-medium text-gray-700">Company Logo</label>
                    <input type="file" id="images" name="images" onChange={handleFileChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
                
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none cursor-pointer">Create</button>
            </form>
        </div>
    );
};

export default CreateCompanyForm;
