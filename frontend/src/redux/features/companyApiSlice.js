import { apiSlice } from "./apiSlice";

export const companyApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        regcompany : builder.mutation({
            query : (formData) =>(
                {
                    url :'/company/regcompany',
                    method:"POST",
                    body:formData,
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
        
    })
})

export const {
    useGetcompanyQuery,
    useRegcompanyMutation,
  } = companyApiSlice;