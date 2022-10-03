import React, { useRef } from "react";
import Button from "../../UI/buttons/Buttons.component";
import FloatingCard from "../../UI/floating-card/FloatingCard.component";

const Profile = () => {
  const userNameRef = useRef();
  const passwordRef = useRef();
  return (
    <FloatingCard>
      <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-5">
        Profile
      </h5>
      <div className="mb-5">
        <p className="mb-2">Change your user name: </p>
        <input
          type="text"
          className="form-input rounded-sm flex-grow w-full border-borderClr dark:border-white mb-2"
          placeholder="Enter the new user name"
          ref={userNameRef}
          required
        />
        <Button type="primary">Update user name</Button>
      </div>

      <div className="mb-5">
        <p className="mb-2">Change your password: </p>
        <input
          type="password"
          className="form-input rounded-sm flex-grow w-full border-borderClr dark:border-white mb-2"
          placeholder="Enter the new password"
          ref={passwordRef}
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
