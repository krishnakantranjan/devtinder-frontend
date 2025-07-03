import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import connectionReducer from './connectionSlice';
import feedReducer from './feedSlice';
import requestReducer from './requestSlice';
const reduxStore = configureStore({
    reducer: {
        user: userReducer,
        feed: feedReducer,
        connections: connectionReducer,
        requests: requestReducer,
    },
    devTools: true,
});

export default reduxStore;