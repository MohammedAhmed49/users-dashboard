import React from "react";
import ChatList from "./chat-list/ChatList.component";
import Chat from "./chat/Chat.component";

const ChatPage = () => {
  return (
    <div className="h-full w-full pt-[calc(60px_-_0px)] flex">
      <ChatList />
      <Chat />
    </div>
  );
};

export default ChatPage;
