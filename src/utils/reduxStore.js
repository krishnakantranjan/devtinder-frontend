import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import connectionReducer from './connectionSlice';
import feedReducer from './feedSlice';
const reduxStore = configureStore({
    reducer: {
        user: userReducer,
        feed : feedReducer,
        connections: connectionReducer,
    },
    devTools: true,
});

export default reduxStore;