import { configureStore } from "@reduxjs/toolkit";
import sidebarToggleTopReducer from "./actions/sidebarToggleTopSlice";

const store = configureStore({
    reducer: { sidebarToggleTop: sidebarToggleTopReducer },
});

// console.log("oncreate store: ", store.getState());

store.subscribe(() => {
    // console.log("store change: ", store.getState());
});

export default store;