import React, { useEffect, useState } from 'react';
import { useGetcompanyQuery, useUpdatecompanyMutation } from '../../redux/features/companyApiSlice.js';
import { toast } from 'sonner';

const UpdateCompanyForm = () => {
    const { data: company, isLoading } = useGetcompanyQuery();
    const [updatecompany] = useUpdatecompanyMutation();
    
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        website: '',
        location: '',
        images: null
    });
    
    useEffect(() => {
        
        if (company) {
            setFormData({
                name: company.name || '',
                description: company.description || '',
                website: company.website || '',
                location: company.location || '',
                images: null 
            });
        }
    }, [company]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setFormData({
                ...formData,
                images: e.target.files[0]
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!company || !company._id) {
            toast.error("Company data not available");
            return;
        }

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('description', formData.description);
            formDataToSend.append('website', formData.website);
            formDataToSend.append('location', formData.location);
            
            if (formData.images) {
                formDataToSend.append('images', formData.images);
            }
    
            const res = await updatecompany({ formData: formDataToSend, id: company._id }).unwrap();
            console.log(res)
            toast.success("Updated Successfully");
        } catch (error) {
            console.error("Update error:", error);
            toast.error(error.data?.message || "Update failed");
        }
    };
    
    if (isLoading) {
        return <div className="max-w-lg mx-auto p-6 text-center">Loading company data...</div>;
    }

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-12">
            <h2 className="text-xl font-semibold mb-4">Update Company Details</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Company Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
                
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea id="description" name="description" rows="3" value={formData.description} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
                </div>
                
                <div className="mb-4">
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700">Website</label>
                    <input type="url" id="website" name="website" value={formData.website} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
                
                <div className="mb-4">
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                    <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
                
                <div className="mb-4">
                    <label htmlFor="images" className="block text-sm font-medium text-gray-700">Company Logo</label>
                    <input type="file" id="images" name="images" onChange={handleFileChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
                
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none cursor-pointer">Update</button>
            </form>
        </div>
    );
};

export default UpdateCompanyForm;