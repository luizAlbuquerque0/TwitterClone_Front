import styles from "./NavBar.module.css";
import { NavLink, Link } from "react-router-dom";

import { SiTwitter } from "react-icons/si";
import { BsPersonFill, BsSearch } from "react-icons/bs";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.brand}>
        <SiTwitter /> TwitterClone
      </Link>
      <ul>
        <li>
          <NavLink to="/login">Entrar</NavLink>
        </li>
        <li>
          <NavLink to="/register">Cadatrar</NavLink>
        </li>
      </ul>
      {/* <form>
        <label>
          <BsSearch className={styles.search} />
          <input type="text" placeholder="Procure um tweet" />
        </label>
      </form>
      <NavLink to="/profile" className={styles.profile}>
        <BsPersonFill />
      </NavLink> */}
    </nav>
  );
};

export default NavBar;
