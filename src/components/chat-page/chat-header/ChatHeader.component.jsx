import React from "react";

const ChatHeader = () => {
  return (
    <div className="flex items-center px-10 py-5 cursor-pointer transition-all duration-500 hover:bg-slate-200 dark:hover:bg-slate-800">
      <img
        src="https://nationaltoday.com/wp-content/uploads/2020/08/international-cat-day-640x514.jpg"
        alt=""
        className="rounded-full w-16 h-16 border-2 mr-3"
      />
      <div className="dark:text-white">
        <p className="text-lg font-bold">Momo</p>
        <span>Hi</span>
      </div>
    </div>
  );
};

export default ChatHeader;
