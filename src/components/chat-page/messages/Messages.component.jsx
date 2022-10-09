import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { onMessagesSnapshot } from "../../../utils/firebase/firebase.util";
import Message from "../message/Message.component";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const chatId = useSelector((state) => state.userChat.chatId);
  useEffect(() => {
    const unsubscribe = onMessagesSnapshot(chatId, (newMessages) => {
      setMessages(newMessages.data().messages);
    });

    return () => {
      unsubscribe();
    };
  }, [chatId]);

  return (
    <div className="w-full bg-secondary max-h-[calc(100vh_-_171px)] h-[calc(100vh_-_130px)] overflow-auto dark:bg-gray-900">
      {messages.map((message) => (
        <Message message={message} key={message.id} />
      ))}
    </div>
  );
};

export default Messages;
