import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    offers: [],
}

const offersSlice = createSlice({
    name: 'offers',
    initialState,
    reducers: {
        setOffersData(state, action) {
            state.offers = action.payload.offers
        },
    }
})

export const offersActions = offersSlice.actions

export default offersSlice