import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const RouteGuard = () => {
  const auth = useSelector((state) => state.user.user);
  return auth ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default RouteGuard;
