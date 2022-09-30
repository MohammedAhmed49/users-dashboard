import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const user = null;
  return user;
};

const RouteGuard = () => {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default RouteGuard;
