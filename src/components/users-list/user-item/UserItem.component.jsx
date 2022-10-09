import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userChatActions } from "../../../store/user-chat/user-chat.reducer";
import { startNewChat } from "../../../utils/firebase/firebase.util";

const UserItem = ({ user }) => {
  const currentUser = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectUserHandler = async () => {
    const chatId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;

    dispatch(userChatActions.updateUserChat({ user: user, chatId }));
    await startNewChat(currentUser, user, chatId);
    navigate("/dashboard/chat");
  };
  return (
    <li className="py-3 sm:py-4 bg-primary px-4 rounded-md mb-2 dark:bg-slate-500">
      <div className="flex items-center space-x-4">
        <div className="flex flex-grow items-center min-w-0">
          <p className="text-md font-medium text-white truncate ml-3 ">
            {user.displayName}
          </p>
        </div>
        <span
          className="inline-flex items-center text-base font-semibold text-green-300 cursor-pointer"
          onClick={selectUserHandler}
        >
          Chat
        </span>
      </div>
    </li>
  );
};

export default UserItem;
