import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

const offersSlice = createSlice({
    name: 'offers',
    initialState,
    reducers: {

    }
})

export const offersActions = offersSlice.actions

export default offersSlice.reducer