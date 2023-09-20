import { createSlice } from "@reduxjs/toolkit";

const sidebarToggleTop = createSlice({
    name: "sidebarToggleTop",
    initialState: {
        data: false
    },
    reducers: {
        setSidebarToggleTop: (state, action) => {
            state.data = action.payload
        },
    },
});

export const { setSidebarToggleTop } = sidebarToggleTop.actions;
export default sidebarToggleTop.reducer;