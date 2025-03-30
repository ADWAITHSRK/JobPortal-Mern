import { apiSlice } from "./apiSlice";

export const companyApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        postjob : builder.mutation({
            query : (formData) =>(
                {
                    url :'/job/postjob',
                    method:"POST",
                    body:formData,
                }
            )
        }),
        
    })
})

export const {
    usePostjobMutation
  } = companyApiSlice;