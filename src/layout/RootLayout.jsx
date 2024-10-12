// DEPENDENCIES
import { Outlet, NavLink } from "react-router-dom";
import Breadcrumb from "../ui/Breadcrumb";

function RootLayout() {
  return (
    <>
      <header>
        <nav>
          <h1>Jobarouter</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="careers">Careers</NavLink>
          <NavLink to="secret">🔒 Secret</NavLink>
        </nav>
        <Breadcrumb />
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
