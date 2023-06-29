import { Link } from "react-router-dom";

const UserNavbar = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/user/profile">Profile</Link>
        <Link to="/user/settings">Settings</Link>
      </nav>
    </>
  );
};

export default UserNavbar;
