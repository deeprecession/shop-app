import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/catalog"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Catalog
      </NavLink>
      <NavLink
        to="/cart"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Cart
      </NavLink>
    </nav>
  );
};

export default NavBar;
