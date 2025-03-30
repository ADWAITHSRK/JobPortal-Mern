import { apiSlice } from "./apiSlice";

export const companyApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        regcompany : builder.mutation({
            query : (formData) =>(
                {
                    url :'/company/regcompany',
                    method:"POST",
                    body:formData,
                    credentials:"include",
                }
            )
        }),
        getcompany : builder.query({
            query : () =>(
                {
                    url :'/company/getcompany',
                    method:"GET",
                    credentials:'include',
                }
            )
        }),
        updatecompany: builder.mutation({
            query: (formData) => {
                const id =  formData.id;
                return {
                    url: `/company/update/${id}`,
                    method: 'PUT',
                    body: formData.formData,
                    credentials: 'include',
                    // FormData serialization is handled automatically
                };
            }
        }),
        
    })
})

export const {
    useGetcompanyQuery,
    useRegcompanyMutation,
    useUpdatecompanyMutation
  } = companyApiSlice;