import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { darkModeActions } from "../../store/dark-mode/dark-mode.reducer";
import Button from "../../UI/buttons/Buttons.component";
import FloatingCard from "../../UI/floating-card/FloatingCard.component";
import DeleteConfirmModal from "../../UI/modal/DeleteConfirmModal.component";
import ToggleButton from "../../UI/toggle-button/ToggleButton.component";
import { deleteAccount } from "../../utils/firebase/firebase.util";

const Settings = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const changeModeHandler = (event) => {
    dispatch(darkModeActions.setDarkMode(event.target.checked));
  };

  const confirmDelete = async () => {
    await deleteAccount();
    setShowDeleteModal(false);
  };

  return (
    <FloatingCard>
      <DeleteConfirmModal
        isOpened={showDeleteModal}
        closeModal={() => setShowDeleteModal(false)}
        confirmDelete={confirmDelete}
      />
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-xl font-bold text-gray-900 dark:text-white">
          Settings
        </h5>
      </div>
      <div className="flow-root">
        <ToggleButton
          toggleText={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          onChange={changeModeHandler}
          isChecked={darkMode}
        />
      </div>
      <Button
        type="red"
        classnames="mt-5"
        onClick={() => setShowDeleteModal(true)}
      >
        Delete my account
      </Button>
    </FloatingCard>
  );
};

export default Settings;
