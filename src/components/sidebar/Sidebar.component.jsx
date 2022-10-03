import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar w-2/12 h-screen bg-secondary dark:bg-gray-900 shadow-lg shadow-borderClr flex flex-col justify-center">
      <Link
        to="/dashboard"
        className="pl-20 transition-all mb-10 hover:pl-24 duration-500 text-xl dark:text-white"
      >
        Dashboard
      </Link>
      <Link
        to="/dashboard/users"
        className="pl-20 transition-all mb-10 hover:pl-24 duration-500 text-xl dark:text-white"
      >
        Users
      </Link>
      <Link
        to="/dashboard/chat"
        className="pl-20 transition-all mb-10 hover:pl-24 duration-500 text-xl dark:text-white"
      >
        Chat
      </Link>
      <Link
        to="/dashboard/settings"
        className="pl-20 transition-all mb-10 hover:pl-24 duration-500 text-xl dark:text-white"
      >
        Settings
      </Link>
      <Link
        to="/dashboard/profile"
        className="pl-20 transition-all mb-10 hover:pl-24 duration-500 text-xl dark:text-white"
      >
        Profile
      </Link>
    </div>
  );
};

export default Sidebar;
