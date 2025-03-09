import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import "../../styles.scss";

const Layout = () => {
  return (
    <main>
      <Outlet />
      <Navbar></Navbar>
    </main>
  );
};

export default Layout;
