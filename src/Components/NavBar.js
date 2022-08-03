import styles from "./NavBar.module.css";
import { NavLink, Link, useNavigate } from "react-router-dom";

import { SiTwitter } from "react-icons/si";
import { BsPersonFill, BsSearch } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";

import { logout, reset } from "../Slices/authSlice";

const NavBar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());

    navigate("/login");
  };

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.brand}>
        <SiTwitter /> TwitterClone
      </Link>
      {!user && (
        <ul>
          <li>
            <NavLink to="/login">Entrar</NavLink>
          </li>
          <li>
            <NavLink to="/register">Cadatrar</NavLink>
          </li>
        </ul>
      )}
      {user && (
        <>
          <form>
            <label>
              <BsSearch className={styles.search} />
              <input type="text" placeholder="Procure um tweet" />
            </label>
          </form>
          <ul>
            <li>
              <NavLink to="/profile" className={styles.profile}>
                <BsPersonFill />
              </NavLink>
            </li>
            <li>
              <span onClick={handleLogout}>Sair</span>
            </li>
          </ul>
        </>
      )}
    </nav>
  );
};

export default NavBar;
