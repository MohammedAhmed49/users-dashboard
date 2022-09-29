import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header.component";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <div className="flex">
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Layout;
