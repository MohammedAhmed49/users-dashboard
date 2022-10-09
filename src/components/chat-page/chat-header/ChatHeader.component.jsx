import React from "react";
import { useDispatch } from "react-redux";
import { userChatActions } from "../../../store/user-chat/user-chat.reducer";

const ChatHeader = ({ chat, chatId }) => {
  const dispatch = useDispatch();
  const selectChatHeaderHandler = () => {
    dispatch(
      userChatActions.updateUserChat({ chatId: chatId, user: chat.userInfo })
    );
  };
  return (
    <div
      className="flex items-center px-10 py-5 cursor-pointer transition-all duration-500 hover:bg-slate-200 dark:hover:bg-slate-800"
      onClick={selectChatHeaderHandler}
    >
      <span className="w-10 h-10 rounded-full bg-slate-600 text-white mr-3 flex justify-center items-center">
        {chat.userInfo.displayName[0]}
      </span>
      <div className="dark:text-white">
        <p className="text-lg font-bold">{chat.userInfo.displayName}</p>
        <span>{chat.lastMessage?.text}</span>
      </div>
    </div>
  );
};

export default ChatHeader;
