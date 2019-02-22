import React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";

const MenuDesktop = () => (
  <nav className="container-desktop__nav">
    <ul className="container-desktop__nav__menu">
      <li className="container-desktop__nav__menu__item">
        <Link to="/" className="container-desktop__nav-menu__link">
          <img
            src="transpile1.png"
            className="container-desktop__nav__menu__link__img"
          />
          Archaize
        </Link>
      </li>
      <li className="container-desktop__nav__menu__item">
        <Link to="/text" className="container-desktop__nav-menu__link">
          <img
            src="explain1.png"
            className="container-desktop__nav__menu__link__img"
          />
          Explain
        </Link>
      </li>
      <li className="container-desktop__nav__menu__item">
        <Link to="/about" className="container-desktop__nav-menu__link">
          <img
            src="about1.png"
            className="container-desktop__nav__menu__link__img"
          />
          About
        </Link>
      </li>
    </ul>
  </nav>
);
export default MenuDesktop;
