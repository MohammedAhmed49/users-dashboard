import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import darkModeReducer from "./dark-mode/dark-mode.reducer";
import todosReducer from "./todos/todos.reducer";
import userReducer from "./user/user.reducer";
import usersReducer from "./users/users.reducer";

const reducers = combineReducers({
  user: userReducer,
  todos: todosReducer,
  users: usersReducer,
  darkMode: darkModeReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "darkMode"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,

  // a non-serializable value error
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
