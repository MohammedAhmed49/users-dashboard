import React from "react";
import { useSelector } from "react-redux";
import Input from "../input/Input.component";
import Messages from "../messages/Messages.component";

const Chat = () => {
  const user = useSelector((state) => state.userChat.user);
  const chatId = useSelector((state) => state.userChat.chatId);

  let chatConent = (
    <div className="h-full flex items-center justify-center">
      <h3 className="text-slate-400 text-4xl font-bold">
        Click on user to start chat!
      </h3>
    </div>
  );

  if (chatId) {
    chatConent = (
      <>
        <div className="px-5 py-5 border-b">
          <p className="text-lg font-bold text-primary dark:text-white">{user.displayName}</p>
        </div>
        <Messages />
        <Input />
      </>
    );
  }
  return <div className="w-3/4">{chatConent}</div>;
};

export default Chat;
