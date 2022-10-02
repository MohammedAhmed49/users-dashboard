import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todos/todos.reducer";
import userReducer from "./user/user.reducer";
import usersReducer from "./users/users.reducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    todos: todosReducer,
    users: usersReducer
  },

  // a non-serializable value error
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
