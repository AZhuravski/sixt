import { configureStore } from "@reduxjs/toolkit"
import offersReducer from './offersSlice'

const store = configureStore({
    reducer: {
        offers: offersReducer,
    }
})

export default store

