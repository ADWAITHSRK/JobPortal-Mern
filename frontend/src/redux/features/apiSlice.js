import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL ,credentials : 'include'}),
    tagTypes: ["application", "company", "job" , "user"],
    endpoints: () => ({}), 
})