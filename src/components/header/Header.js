import React, {useContext} from "react";
import './Header.css';
import logo from "../../assets/logo.jpg";
import {Link, NavLink} from "react-router-dom";
import {AuthContext} from "../../context/AuthContextProvider";

function Header() {
  const { isAuth } = useContext(AuthContext);

  return (
    <header className="header-position-container">
      <section className="header-outer-container">
        <picture className="header-item-container">
          <Link to="/">
            <img src={logo} alt="Logo"/>
          </Link>
        </picture>
        <nav className="header-item-container">
          <ul>
            <li>
              <NavLink
                className={({ isActive })  => isActive ? 'nav-link-active' : 'nav-link' }
                to="/login">Login</NavLink>
            </li>
            {isAuth &&
              <li>
                <NavLink
                  className={({isActive}) => isActive ? 'nav-link-active' : 'nav-link'}
                  to="/search">Zoeken</NavLink>
              </li>
            }
            <li>
              <NavLink
                className={({ isActive })  => isActive ? 'nav-link-active' : 'nav-link' }
                to="/faq">FAQ</NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive })  => isActive ? 'nav-link-active' : 'nav-link' }
                to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}

export default Header;
