import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";

const reduxStore = configureStore({
    reducer: {
        user : userReducer,
    },
    devTools: true,
});

export default reduxStore;