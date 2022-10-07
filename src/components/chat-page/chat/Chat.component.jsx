import React from "react";
import Input from "../input/Input.component";
import Messages from "../messages/Messages.component";

const Chat = () => {
  return (
    <div className="flex-grow">
      <div className="px-5 py-5 border-b">
        <p className="text-lg font-bold text-primary dark:text-white">Momo</p>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
