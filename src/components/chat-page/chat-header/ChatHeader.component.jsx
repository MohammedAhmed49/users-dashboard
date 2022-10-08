import React from "react";

const ChatHeader = ({ chat }) => {
  return (
    <div className="flex items-center px-10 py-5 cursor-pointer transition-all duration-500 hover:bg-slate-200 dark:hover:bg-slate-800">
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
