import { apiSlice } from "./apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        register : builder.mutation({
            query : (formData) =>(
                {
                    url :'/user/register',
                    method:"POST",
                    body:formData,
                }
            )
        }),

        login : builder.mutation({
            query : (data) =>(
                {
                    url :'/user/login',
                    method:"POST",
                    body:data,
                    credentials : 'include',
                }
            )
        }),
        updateprofile : builder.mutation({
            query : (formData) =>(
                {
                    url :'/user/update',
                    method:"PUT",
                    body:formData,
                }
            )
        }),
        getprofile : builder.query({
            query : () =>(
                {
                    url :'/user/getprofile',
                    method:"GET",
                    credentials:'include',
                }
            )
        }),
        logout : builder.mutation({
            query : () =>(
                {
                    url :'/user/logout',
                    method:"POST",
                    credentials : 'include',
                }
            )
        }),
        
    })
})

export const {
    useRegisterMutation,
    useLoginMutation,
    useUpdateprofileMutation,
    useGetprofileQuery,
    useLogoutMutation
  } = userApiSlice;