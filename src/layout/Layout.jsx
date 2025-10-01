import React from "react";
import NavBar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return(
    <>
    <div>
        <NavBar/>
    </div>
    <main>
        <Outlet/>
    </main>
    </>
  )
}

export default Layout;
