import { useState } from "react";

const TodoItem = ({ todo }) => {
  const [isDone, setIsDone] = useState(todo.isDone);

  const toggleIsDone = (e) => {
    setIsDone(e.target.checked);
  };

  const deletehandler = () => {
    console.log(todo.id);
  };
  return (
    <li className="py-3 sm:py-4 bg-primary px-4 rounded-md mb-2 cursor-grab">
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
          onClick={deletehandler}
          className="inline-flex items-center text-base font-semibold text-red-300 cursor-pointer"
        >
          Delete
        </span>
      </div>
    </li>
  );
};

export default TodoItem;
