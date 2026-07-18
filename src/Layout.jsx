import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";


function Layout({ search, setSearch }) {
  return (
    <>
      <Navbar
        search={search}
        setSearch={setSearch}
      />
      <Outlet />
    </>
  );
}

export default Layout;
