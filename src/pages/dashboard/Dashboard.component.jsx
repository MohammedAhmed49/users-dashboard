import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { fetchAllUsers } from "../../store/users/users.actions";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);
  return (
    <div className="flex justify-center items-center w-10/12 dark:bg-slate-800">
      <Outlet />
    </div>
  );
};

export default Dashboard;
