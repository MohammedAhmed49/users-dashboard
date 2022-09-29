import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed w-full">
      <nav className="bg-primary text-white">
        <div className="container mx-auto flex justify-between py-5">
          <div className="logo">
            <Link to="/">Logo</Link>
          </div>

          <div className="links">
            <Link to="/register" className="mx-4">
              Register
            </Link>
            <Link to="/sign-in" className="mx-4">
              Sign in
            </Link>
            <Link to="/sign-out" className="mx-4">
              Sign out
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
