import React, { useState } from "react";

const Message = () => {
  const [isOwner, setIsOwner] = useState(false);
  return (
    <div
      className={`flex gap-5 p-5 mb-10 ${isOwner ? "flex-row-reverse" : ""}`}
    >
      <img
        src="https://nationaltoday.com/wp-content/uploads/2020/08/international-cat-day-640x514.jpg"
        alt=""
        className="w-10 h-10 rounded-full"
      />
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
          Hi there
        </p>
        <img
          src="https://nationaltoday.com/wp-content/uploads/2020/08/international-cat-day-640x514.jpg"
          alt=""
          className="w-1/2"
        />
      </div>
    </div>
  );
};

export default Message;
