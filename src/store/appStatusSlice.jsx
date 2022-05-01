import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "",
  title: "",
  message: "",
};

const appStatusSlice = createSlice({
  name: "appStatus",
  initialState,
  reducers: {
    setAppStatus(state, action) {
      state.status = action.payload.status;
      state.title = action.payload.title;
      state.message = action.payload.message;
    },
  },
});

export const appStatusActions = appStatusSlice.actions;

export default appStatusSlice;
