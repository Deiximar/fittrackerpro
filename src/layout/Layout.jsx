import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
      {/* <nav>
        <Navbar></Navbar>
      </nav> */}
    </div>
  );
};

export default Layout;
