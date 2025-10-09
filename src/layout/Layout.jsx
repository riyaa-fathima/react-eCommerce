import React from "react";

import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";



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
