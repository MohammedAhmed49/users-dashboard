import { getUserDocument } from "../../utils/firebase/firebase.util";
import { todoActions } from "../todos/todos.reducer";
import { userActions } from "./user.reducer";

export const setUserDocument = (newUser) => {
  return async (dispatch) => {
    const userDocument = await getUserDocument(newUser);
      dispatch(userActions.signIn(userDocument));
    if (userDocument?.todosList?.length) {
      dispatch(todoActions.setList(userDocument.todosList));
    } else {
      dispatch(todoActions.setList([]));
    }
  };
};
