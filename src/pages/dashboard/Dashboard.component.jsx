import { Outlet, Route, Routes } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex justify-center items-center w-10/12">
      <Outlet />
    </div>
  );
};

export default Dashboard;
