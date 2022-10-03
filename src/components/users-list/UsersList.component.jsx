import { useSelector } from "react-redux";
import ListCard from "../../UI/list-card/ListCard.component";
import UserItem from "./user-item/UserItem.component";

const UsersList = () => {
  const users = useSelector((state) => state.users.users);
  return (
    <ListCard>
      <div className="flex justify-between items-center mb-4 ">
        <h5 className="text-xl font-bold text-gray-900 dark:text-white">
          Users
        </h5>
      </div>
      <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 ">
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </ListCard>
  );
};

export default UsersList;
