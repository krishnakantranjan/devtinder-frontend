import { createSlice } from '@reduxjs/toolkit';

const connectionSlice = createSlice({
  name: 'connections',
  initialState: [],
  reducers: {
    addConnections: (state, action) => {
      return action.payload; // make sure this returns an array
    },
  },
});

export const { addConnections } = connectionSlice.actions;
export default connectionSlice.reducer;