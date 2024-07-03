import { NavLink, NavigationType, useLocation, useNavigationType } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./header.css";
import { Button } from "./Button";

import Logo from "./../../image/S.png";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const useBackButton = () => {
    const navType = useNavigationType();
    return navType === NavigationType.Pop;
  };

  const useScrollToTop = () => {
    const { pathname } = useLocation();
    const isPop = useBackButton();
    const scrollToTop = () => window.scrollTo(0, 0);

    useEffect(() => {
      scrollToTop();
    }, [pathname, isPop]);

    useEffect(() => {
      window.addEventListener("beforeunload", scrollToTop);
      return () => {
        window.removeEventListener("beforeunload", scrollToTop);
      };
    }, []);
  };

  useScrollToTop();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/startseite" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={Logo} alt="Serkan Öztürk Logo" className="navbar-logo-img" />
        </NavLink>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink to="/startseite" className="nav-links" onClick={closeMobileMenu}>
              Startseite
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projekte" className="nav-links" onClick={closeMobileMenu}>
              Projekte
            </NavLink>
          </li>
          <li className="nav-item kontakt-link">
            <NavLink to="/kontakt" className="nav-links" onClick={closeMobileMenu}>
              Kontakt
            </NavLink>
          </li>
        </ul>
        <Button />
      </div>
    </nav>
  );
};

export default Navbar;
