import { Link } from "react-router-dom";

const UserItem = ({ user }) => {
  return (
    <li className="py-3 sm:py-4 bg-primary px-4 rounded-md mb-2 cursor-grab">
      <div className="flex items-center space-x-4">
        <div className="flex flex-grow items-center min-w-0">
          <p className="text-md font-medium text-white truncate ml-3">
            {user.displayName}
          </p>
        </div>
        <Link
          to={`chat/${user.id}`}
          className="inline-flex items-center text-base font-semibold text-green-300 cursor-pointer"
        >
          Chat
        </Link>
      </div>
    </li>
  );
};

export default UserItem;
