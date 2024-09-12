import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Logo from "../components/icons/Logo";

const Layout = () => {
  return (
    <main>
      <Logo />
      <Outlet />
      <Navbar></Navbar>
    </main>
  );
};

export default Layout;
