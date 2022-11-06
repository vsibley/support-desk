import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import projectService from './projectService'

const initialState = {
    projects:[],
    project: {}, 
    isError: false, 
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const projectSlice = createSlice({
    name: 'Project',
    initialState,
    reducers: {
        reset:(state) => initialState
    }, 
    extraReducers: (builder) => {

    }
})

export const {reset} = projectSlice.actions
export default projectSlice.reducer