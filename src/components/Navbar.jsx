import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/user/profile">User</Link>
      </nav>
    </>
  );
};

export default Navbar;
