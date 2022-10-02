import { updateTodosList } from "../../utils/firebase/firebase.util";
import { todoActions } from "./todos.reducer";

export const updateTodoAsync = (todosList) => {
  return async (dispatch) => {
    await updateTodosList(todosList);
    dispatch(todoActions.setList(todosList));
  };
};

export const addTodoAsync = (todosList, todo) => {
  return async (dispatch) => {
    const newTodoList = [todo, ...todosList];
    dispatch(updateTodoAsync(newTodoList));
  };
};

export const deleteTodoAsync = (todosList, id) => {
  return async (dispatch) => {
    const newTodoList = todosList.filter((item) => item.id !== id);
    dispatch(updateTodoAsync(newTodoList));
  };
};
