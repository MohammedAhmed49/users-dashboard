import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { onChatsSnapshot } from "../../../utils/firebase/firebase.util";
import ChatHeader from "../chat-header/ChatHeader.component";

const ChatList = () => {
  const [chats, setChats] = useState(null);
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    const unsubscribe = onChatsSnapshot((updatedChats) => {
      setChats(updatedChats.data());
    });

    return () => {
      unsubscribe && unsubscribe();
    };
  }, [user]);

  let chatHeaders = (
    <p className="text-lg dark:text-white text-center py-10">
      Go to users and start a new chat!
    </p>
  );

  if (chats) {
    chatHeaders = Object.entries(chats)
      .sort((a, b) => b[1].date - a[1].date)
      .map((chat) => (
        <ChatHeader chat={chat[1]} key={chat[0]} chatId={chat[0]} />
      ));
  }

  return (
    <div className="h-[calc(100vh_-_60px)] w-1/4 bg-slate-50 dark:bg-primary">
      {chatHeaders}
    </div>
  );
};

export default ChatList;
