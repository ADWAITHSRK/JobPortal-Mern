import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from './features/apiSlice.js';
import savedJobsReducer from './features/savedJobSlice.js'
 
export const  store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    savedJobs:savedJobsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: window.location.hostname === "localhost",
});

