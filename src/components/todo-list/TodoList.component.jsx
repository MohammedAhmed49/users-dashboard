import { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import Button from "../../UI/buttons/Buttons.component";
import AddTodoModal from "../../UI/modal/AddTodoModal.component";
import TodoItem from "./todo-item/TodoItem.component";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { mission: "Todo 1", isDone: false, id: 1 },
    { mission: "Todo 2", isDone: true, id: 2 },
    { mission: "Todo 3", isDone: true, id: 3 },
  ]);
  const [showAdd, setShowAdd] = useState(false);

  const closeAddModal = () => {
    setShowAdd(false);
  };

  const addTodo = (value) => {
    console.log(value);
  };

  const deleteConfirmed = (id) => {
    console.log(id);
  };

  let todosContent = <p className="text-lg">Create a new todo!</p>;

  if (todos) {
    todosContent = (
      <ReactSortable
        list={todos}
        setList={setTodos}
        animation={200}
        swap={true}
      >
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteConfirmed={deleteConfirmed}
          />
        ))}
      </ReactSortable>
    );
  }

  return (
    <div className="w-1/2">
      <AddTodoModal
        isOpened={showAdd}
        closeModal={closeAddModal}
        addTodo={addTodo}
      />

      <div className="p-4 w-full bg-white rounded-lg border shadow-md sm:p-8">
        <div className="flex justify-between items-center mb-4">
          <h5 className="text-xl font-bold text-gray-900">Todo list</h5>
          <Button type="green" onClick={() => setShowAdd(true)}>
            Add Todo
          </Button>
        </div>
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200 ">
            {todosContent}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
