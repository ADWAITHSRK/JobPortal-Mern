import { createSlice } from "@reduxjs/toolkit";

const loadSaved = () =>{
    const saved = localStorage.getItem('savedJobs')
    return saved ? JSON.parse(saved) : []
}

const iniatialState = {
    savedJobs :  loadSaved(),
}

const savedJobSlice = createSlice({
    name : 'savedJobs',
    initialState:iniatialState,
    reducers : {
        save: (state,action) => {
            const job = action.payload
            const savedJob = state.savedJobs.find((item) => item._id === job._id)
            if(!savedJob){
                state.savedJobs.push(job)
                localStorage.setItem('savedJobs',JSON.stringify(state.savedJobs))
            }
        },
        remove:(state,action) => {
            const jobId = action.payload
            state.savedJobs = state.savedJobs.filter((item)=> item._id !== jobId)
            localStorage.setItem('savedJobs',JSON.stringify(state.savedJobs))
        }
    }

})

export const {save,remove} = savedJobSlice.actions
export default savedJobSlice.reducer;