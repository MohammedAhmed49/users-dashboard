import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex justify-center items-center w-10/12 dark:bg-slate-800">
      <Outlet />
    </div>
  );
};

export default Dashboard;
