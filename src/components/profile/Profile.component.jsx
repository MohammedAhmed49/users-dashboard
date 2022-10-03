import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserDocument } from "../../store/user/user.actions";
import Button from "../../UI/buttons/Buttons.component";
import FloatingCard from "../../UI/floating-card/FloatingCard.component";
import { updateUserName } from "../../utils/firebase/firebase.util";

const Profile = () => {
  const userNameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const updateUserNameHandler = async () => {
    if (userNameRef.current.value === "") {
      alert("Please enter a valid name!");
      return;
    }
    const newUser = await updateUserName(userNameRef.current.value);
    if (newUser) {
      dispatch(setUserDocument(newUser));
    }
  };
  return (
    <FloatingCard>
      <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-5">
        Profile
      </h5>
      <div className="mb-5">
        <p className="mb-2 dark:text-white ">Change your user name: </p>
        <input
          type="text"
          className="form-input rounded-sm flex-grow w-full border-borderClr dark:border-white mb-2"
          placeholder="Enter the new user name"
          ref={userNameRef}
          required
        />
        <Button type="primary" onClick={updateUserNameHandler}>
          Update user name
        </Button>
      </div>

      <div className="mb-5">
        <p className="mb-2 dark:text-white">Change your password: </p>
        <input
          type="password"
          className="form-input rounded-sm flex-grow w-full border-borderClr dark:border-white mb-2"
          placeholder="Enter the new password"
          ref={passwordRef}
          required
        />
        <input
          type="password"
          className="form-input rounded-sm flex-grow w-full border-borderClr dark:border-white mb-2"
          placeholder="Confirm the new password"
          ref={confirmPasswordRef}
          required
        />
        <Button type="primary">Update password</Button>
      </div>

      <div className="flex justify-end">
        <Button type="red">Delete chat history</Button>
      </div>
    </FloatingCard>
  );
};

export default Profile;
