import { configureStore } from "@reduxjs/toolkit"
import offersSlice from './offersSlice'
import notificationSlice from './notificationSlice'

const store = configureStore({
    reducer: {
        offers: offersSlice.reducer,
        notification: notificationSlice.reducer,
    }
})

export default store

