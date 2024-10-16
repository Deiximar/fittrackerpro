import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const Layout = () => {
  return (
    <main>
      <Outlet />
      <Navbar></Navbar>
    </main>
  );
};

export default Layout;
