import { Outlet } from "react-router-dom";
import UserNavbar from "../components/UserNavbar";

const UserTemplate = () => {
  return (
    <>
      <div className="render-page-here">
        <Outlet />
      </div>
      <UserNavbar />
    </>
  );
};

export default UserTemplate;
