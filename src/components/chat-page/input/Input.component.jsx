import React from "react";
import Button from "../../../UI/buttons/Buttons.component";

const Input = () => {
  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Send a message ..."
        className="flex-grow px-5 py-2 border-0 focus:outline-none focus:shadow-none dark:bg-slate-800 dark:text-white"
      />
      <div>
        <Button type="primary">Send</Button>
      </div>
    </div>
  );
};

export default Input;
