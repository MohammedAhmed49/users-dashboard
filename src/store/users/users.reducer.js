import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateUsers: (state, actions) => {
      state.users = actions.payload;
    },
  },
});

export const usersActions = usersSlice.actions;

export default usersSlice.reducer;
