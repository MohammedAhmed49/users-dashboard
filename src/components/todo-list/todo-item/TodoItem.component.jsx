import { useState } from "react";
import DeleteConfirmModal from "../../../UI/modal/DeleteConfirmModal.component";

const TodoItem = ({ todo, deleteConfirmed }) => {
  const [isDone, setIsDone] = useState(todo.isDone);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const toggleIsDone = (e) => {
    setIsDone(e.target.checked);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const confirmDelete = () => {
    deleteConfirmed(todo.id);
    closeDeleteModal();
  };
  return (
    <li className="py-3 sm:py-4 bg-primary px-4 rounded-md mb-2 cursor-grab">
      <DeleteConfirmModal
        isOpened={showDeleteModal}
        closeModal={closeDeleteModal}
        confirmDelete={confirmDelete}
      />
      <div className="flex items-center space-x-4">
        <div className="flex flex-grow items-center min-w-0">
          <input
            type="checkbox"
            checked={isDone ? true : false}
            onChange={(e) => toggleIsDone(e)}
          />
          <p
            className={`text-md font-medium text-white truncate ml-3 ${
              isDone ? "line-through" : null
            }`}
          >
            {todo.mission}
          </p>
        </div>
        <span
          className="inline-flex items-center text-base font-semibold text-red-300 cursor-pointer"
          onClick={() => setShowDeleteModal(true)}
        >
          Delete
        </span>
      </div>
    </li>
  );
};

export default TodoItem;
