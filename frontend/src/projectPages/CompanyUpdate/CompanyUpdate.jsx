import React, { useState } from 'react';

const UpdateCompanyForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        website: '',
        location: '',
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Updated Company Details:', formData);
        // Here, you can add API call to update company details, including file upload
    };

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
