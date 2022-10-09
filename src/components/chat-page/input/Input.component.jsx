import React, { useState } from "react";
import Button from "../../../UI/buttons/Buttons.component";
import Photo from "../../../assets/images/photo-icon.png";
import {
  sendMessage,
  updateLastMessage,
} from "../../../utils/firebase/firebase.util";
import { v4 as uuid } from "uuid";
import { useSelector } from "react-redux";

const Input = () => {
  const [text, setText] = useState("");
  const [photo, setPhoto] = useState(null);
  const user = useSelector((state) => state.userChat.user);
  const chatId = useSelector((state) => state.userChat.chatId);

  const sendMessageHandler = async (e) => {
    e.preventDefault();
    if (text === "" && !photo) {
      alert("Please enter a message!");
      return;
    }
    const textTemp = text;
    const photoTemp = photo;
    setText("");
    setPhoto(null);
    await sendMessage(textTemp, photo, uuid(), chatId);
    await updateLastMessage(user, chatId, textTemp);
  };
  return (
    <form onSubmit={sendMessageHandler}>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Send a message ..."
          className="flex-grow px-5 py-2 border-0 focus:outline-none focus:shadow-none dark:bg-slate-800 dark:text-white"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />

        <div className="flex items-center">
          <input
            type="file"
            className="hidden"
            id="photo"
            onChange={(e) => setPhoto(e.target.files[0])}
          />
          <label htmlFor="photo">
            <img src={Photo} className="h-10 mx-2 cursor-pointer" alt="" />
          </label>
          <Button type="primary">Send</Button>
        </div>
      </div>
    </form>
  );
};

export default Input;
