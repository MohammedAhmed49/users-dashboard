import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactSortable } from "react-sortablejs";
import {
  addTodoAsync,
  deleteTodoAsync,
  updateTodoAsync,
} from "../../store/todos/todos.actions";
import { todoActions } from "../../store/todos/todos.reducer";
import Button from "../../UI/buttons/Buttons.component";
import ListCard from "../../UI/list-card/ListCard.component";
import AddTodoModal from "../../UI/modal/AddTodoModal.component";
import TodoItem from "./todo-item/TodoItem.component";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todosList);
  const [showAdd, setShowAdd] = useState(false);

  const dispatch = useDispatch();

  const closeAddModal = () => {
    setShowAdd(false);
  };

  const addTodo = (value) => {
    const id = Math.floor(Math.random() * 10000000);
    dispatch(addTodoAsync(todos, { id: id, mission: value, isDone: false }));
  };

  const deleteConfirmed = (id) => {
    dispatch(deleteTodoAsync(todos, id));
  };

  const updateTodo = (id, isDoneValue) => {
    const newTodoList = todos.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isDone: isDoneValue,
        };
      }
      return item;
    });
    dispatch(updateTodoAsync(newTodoList));
  };

  let todosContent = <p className="text-lg">Create a new todo!</p>;

  if (todos.length > 0) {
    todosContent = (
      <ReactSortable
        animation={200}
        swap={true}
        list={todos.map((x) => ({ ...x, chosen: true }))}
        setList={(todos) => dispatch(todoActions.setList(todos))}
      >
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteConfirmed={deleteConfirmed}
            updateTodo={updateTodo}
          />
        ))}
      </ReactSortable>
    );
  }

  return (
    <ListCard>
      <AddTodoModal
        isOpened={showAdd}
        closeModal={closeAddModal}
        addTodo={addTodo}
      />
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
    </ListCard>
  );
};

export default TodoList;
