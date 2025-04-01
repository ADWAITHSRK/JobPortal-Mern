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
        findadminjobs : builder.query({
            query : () =>(
                {
                    url :'/job/findadminjobs',
                    method:"GET",
                    credentials:'include',
                }
            )
        }),
        findalljobs : builder.query({
            query : () =>(
                {
                    url :'/job/findalljob',
                    method:"GET",

                }
            )
        }),

        findjobbyid : builder.query({
            query : (Id) =>(
                {
                    url :`/job/findjobbyid/${Id}`,
                    method:"GET",
                   
                }
            )
        }),
        editjob : builder.mutation({
            query: (Data) => {
                const id =  Data.id;
                return {
                    url: `/job/editjob/${id}`,
                    method: 'PUT',
                    body: Data.formData,
                    // FormData serialization is handled automatically
                };
            }
        }),
        deletejob : builder.mutation({
            query : (id) =>(
                {
                    url :`/job/deletejob/${id}`,
                    method:"DELETE",
                    
                }
            )
        }),
        findapplicants : builder.query({
            query : (id) =>(
                {
                    url :`/job/find-applicants/${id}`,
                    method:"GET",
                    credentials:'include',
                }
            )
        }),
        
    })
})

export const {
    usePostjobMutation,
    useFindadminjobsQuery,
    useFindjobbyidQuery,
    useEditjobMutation,
    useDeletejobMutation,
    useFindalljobsQuery,
    useFindapplicantsQuery
  } = companyApiSlice;