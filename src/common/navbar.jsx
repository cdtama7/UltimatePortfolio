import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="navbar-nav">
        <div className="row">
          <div class="col-5">
            <NavLink className="nav-item nav-link" to="/">
              Carlos De Castro
            </NavLink>
          </div>
          <div class="col-3">
            <NavLink className="nav-item nav-link" to="/aboutme">
              About Me
            </NavLink>
          </div>
          <div class="col-2">
            <NavLink className="nav-item nav-link" to="/projects">
              Projects
            </NavLink>
          </div>
          <div class="col-2">
            <NavLink className="nav-item nav-link" to="/contact">
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
