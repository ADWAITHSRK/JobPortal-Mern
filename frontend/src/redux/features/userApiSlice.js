import { apiSlice } from "./apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        register : builder.mutation({
            query : (data) =>(
                {
                    url :'/user/register',
                    method:"POST",
                    body:data,
                    credentials:'include'
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