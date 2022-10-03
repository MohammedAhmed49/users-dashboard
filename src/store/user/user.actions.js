import { getUserDocument } from "../../utils/firebase/firebase.util";
import { todoActions } from "../todos/todos.reducer";
import { userActions } from "./user.reducer";

export const setUserDocument = (newUser) => {
  return async (dispatch) => {
    if (newUser) {
      const userDocument = await getUserDocument(newUser);
      dispatch(userActions.signIn(userDocument));
      if (userDocument?.todosList?.length) {
        dispatch(todoActions.setList(userDocument.todosList));
      }
    } else {
      dispatch(userActions.signIn(null));
      dispatch(todoActions.setList([]));
    }
    
  };
};
