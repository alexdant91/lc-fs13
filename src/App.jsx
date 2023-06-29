import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PublicTemplate from "./templates/PublicTemplate";
import Settings from "./pages/user/Settings";
import Profile from "./pages/user/Profile";
import UserTemplate from "./templates/UserTemplate";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PublicTemplate />}>
          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/user" element={<UserTemplate />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
