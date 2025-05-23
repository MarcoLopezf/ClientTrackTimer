import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clients: [],
};

export const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    addClient: (state, action) => {
      state.clients.push(action.payload);
    },
  },
});

export const { addClient } = clientsSlice.actions;

export default clientsSlice.reducer;
