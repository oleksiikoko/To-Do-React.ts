import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper  blue darken-3 px1">
      <a href="/" className="brand-logo">
        React.Ts
      </a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <NavLink to="/">ToDo</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
