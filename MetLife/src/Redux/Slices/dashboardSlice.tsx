import { createSlice } from "@reduxjs/toolkit";
import api from "../../Api/Api";

const initial = {
    statistics: [],
    videos: [],
}

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: initial,
    reducers: {
        setDashboardData: (state, action) => {
            state.statistics = action.payload.statistics;
            state.videos = action.payload.videos;
        }
    }
})

export const  {setDashboardData}  = dashboardSlice.actions;
export default dashboardSlice.reducer;




export const getDashboardData = async () => {
    const res = await api.get("/api");
    return res.data;
};
