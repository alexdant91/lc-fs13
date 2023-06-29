import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const PublicTemplate = () => {
  return (
    <>
      <Navbar />
      <div className="render-page-here">
        <Outlet />
      </div>
    </>
  );
};

export default PublicTemplate;
