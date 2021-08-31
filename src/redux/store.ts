import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./slices/authSlice"

const reducer = { auth: authReducer }

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export type RootState = ReturnType<typeof reducer>
