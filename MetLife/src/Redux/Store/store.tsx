import { configureStore } from "@reduxjs/toolkit";
import  dashboardReducer  from "../Slices/dashboardSlice";


export const store = configureStore({
    reducer: {
        dashboard: dashboardReducer
    }
})