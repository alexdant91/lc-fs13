import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <h1>Profile</h1>
      <div>
        <p> Id: {user.id} </p>
        <p> Name: {user.name} </p>
        <p> Email: {user.email} </p>
      </div>
      <div>
        <button onClick={handleLogout}>Log Out!</button>
      </div>
    </>
  );
};

export default Profile;
