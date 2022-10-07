import React from "react";
import ChatHeader from "../chat-header/ChatHeader.component";

const ChatList = () => {
  return (
    <div className="h-[calc(100vh_-_60px)] w-1/4 bg-slate-50 dark:bg-primary">
      <ChatHeader />
      <ChatHeader />
      <ChatHeader />
    </div>
  );
};

export default ChatList;
