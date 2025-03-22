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
    })
})

export const {
    useRegisterMutation,
    useLoginMutation,
  } = userApiSlice;