import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header.component";
import { useSelector } from "react-redux";
import Sidebar from "../components/sidebar/Sidebar.component";

const Layout = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <Fragment>
      <Header />
      <div className="flex">
        {user ? <Sidebar /> : null}
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Layout;
