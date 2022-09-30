import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/user.reducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },

  // a non-serializable value error
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
