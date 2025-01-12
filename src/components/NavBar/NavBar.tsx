import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={style.navbar}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? style.navLinkActive : style.navLinkInactive
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/catalog"
        className={({ isActive }) =>
          isActive ? style.navLinkActive : style.navLinkInactive
        }
      >
        Catalog
      </NavLink>
      <NavLink
        to="/cart"
        className={({ isActive }) =>
          isActive ? style.navLinkActive : style.navLinkInactive
        }
      >
        Cart
      </NavLink>
    </nav>
  );
};

export default NavBar;