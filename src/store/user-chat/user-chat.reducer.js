import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  chatId: null,
};

const userChatSlice = createSlice({
  name: "userChat",
  initialState,
  reducers: {
    updateUserChat: (state, action) => {
      state.user = action.payload.user;
      state.chatId = action.payload.chatId;
    },
  },
});

export const userChatActions = userChatSlice.actions;

export default userChatSlice.reducer;
