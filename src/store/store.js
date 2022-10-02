import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todos/todos.reducer";
import userReducer from "./user/user.reducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    todos: todosReducer
  },

  // a non-serializable value error
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
