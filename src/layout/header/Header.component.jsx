import { Link } from "react-router-dom";
import { signOutCustom } from "../../utils/firebase/firebase.util";

const Header = ({ user }) => {
  const signOutHandler = async (e) => {
    e.preventDefault();
    await signOutCustom();
  };

  return (
    <header className="fixed w-full">
      <nav className="bg-primary text-white">
        <div className="container mx-auto flex justify-between py-5">
          <div className="logo">
            <Link to="/">Logo</Link>
          </div>

          <div className="links">
            {user ? (
              <Link
                onClick={(e) => signOutHandler(e)}
                to="/sign-out"
                className="mx-4"
              >
                Sign out ({user.displayName})
              </Link>
            ) : (
              <>
                <Link to="/register" className="mx-4">
                  Register
                </Link>
                <Link to="/sign-in" className="mx-4">
                  Sign in
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
