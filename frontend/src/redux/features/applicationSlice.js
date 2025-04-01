import { apiSlice } from "./apiSlice";

export const applicationApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        applyjob: builder.mutation({
            query : (id) =>(
                {
                    url :`/application/apply/${id}`,
                    method:"POST",
                    credentials:"include"
                }
            )
        }),
        prevapply: builder.query({
            query : (id) =>(
                {
                    url :`/application/prevapply/${id}`,
                    method:"GET",
                    credentials:"include"
                }
            )
        }),
        myapplications: builder.query({
            query : () =>(
                {
                    url :'/application/my-applications',
                    method:"GET",
                    credentials:"include"
                }
            )
        }),
        update: builder.mutation({
            query: ({status,id}) => {
                return {
                    url: `/application/update/${id}`,
                    method: 'PATCH',
                    body: {status:status},
                    credentials: 'include',
                    
                };
            }
        }),
        
        
    })
})

export const {
    useApplyjobMutation,
    usePrevapplyQuery,
    useMyapplicationsQuery,
    useUpdateMutation
  } = applicationApiSlice;