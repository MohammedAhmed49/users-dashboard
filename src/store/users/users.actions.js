import { getUsersCollection } from "../../utils/firebase/firebase.util";
import { usersActions } from "./users.reducer";

export const fetchAllUsers = () => {
  return async (dispatch) => {
      const users = await getUsersCollection();
      dispatch(usersActions.updateUsers(users));
  };
};
