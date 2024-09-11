import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Logo from "../components/icons/Logo";

const Layout = () => {
  return (
    <div>
      <main>
        <Logo />
        <Outlet />
      </main>

      <Navbar></Navbar>
    </div>
  );
};

export default Layout;
