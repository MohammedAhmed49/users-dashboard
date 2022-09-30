import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar w-2/12 h-screen bg-secondary shadow-lg shadow-borderClr flex flex-col justify-center">
      <Link
        to="/dashboard"
        className="pl-20 transition-all mb-10 hover:pl-24 duration-500 text-xl"
      >
        Dashboard
      </Link>
      <Link
        to="/dashboard/users"
        className="pl-20 transition-all mb-10 hover:pl-24 duration-500 text-xl"
      >
        Users
      </Link>
      <Link
        to="/dashboard/chat"
        className="pl-20 transition-all mb-10 hover:pl-24 duration-500 text-xl"
      >
        Chat
      </Link>
      <Link
        to="/dashboard/settings"
        className="pl-20 transition-all mb-10 hover:pl-24 duration-500 text-xl"
      >
        Settings
      </Link>
      <Link
        to="/dashboard/profile"
        className="pl-20 transition-all mb-10 hover:pl-24 duration-500 text-xl"
      >
        Profile
      </Link>
    </div>
  );
};

export default Sidebar;
