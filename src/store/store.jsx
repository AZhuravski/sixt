import { configureStore } from "@reduxjs/toolkit";
import offersSlice from "./offersSlice";
import appStatusSlice from "./appStatusSlice";

const store = configureStore({
  reducer: {
    offers: offersSlice.reducer,
    appStatus: appStatusSlice.reducer,
  },
});

export default store;
