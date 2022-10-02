import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todosList: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setList: (state, action) => {
      state.todosList = action.payload;
    }
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;
