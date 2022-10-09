import React, { useState } from "react";
import { useSelector } from "react-redux";

const Message = ({ message }) => {
  const currentUser = useSelector((state) => state.user.user);
  const otherUser = useSelector((state) => state.userChat.user);
  const [isOwner, setIsOwner] = useState(currentUser.uid === message.senderId);
  return (
    <div
      className={`flex gap-2 p-5 flex-wrap ${
        isOwner ? "flex-row-reverse" : ""
      }`}
    >
      {isOwner ? (
        <span className="w-full text-right dark:text-slate-400">{currentUser.displayName}</span>
      ) : (
        <span className="w-full text-left dark:text-slate-400">{otherUser.displayName}</span>
      )}
      <div
        className={`max-w-[calc(80%_-_0px)] flex flex-col ${
          isOwner ? "items-end" : ""
        }`}
      >
        <p
          className={`max-w-max py-3 px-6 mb-2 text-white rounded-xl  ${
            isOwner
              ? "rounded-tr-none bg-sky-500"
              : "rounded-tl-none bg-gray-600"
          }`}
        >
          {message.text}
        </p>
        {message.photo && <img src={message.photo} alt="" className="w-1/2" />}
      </div>
    </div>
  );
};

export default Message;
