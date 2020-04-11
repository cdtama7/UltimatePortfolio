import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

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
          <div>
            <nav>
              <a href="#1">1</a>
              <a href="#2">2</a>
              <a href="#3">3</a>
            </nav>

            <div class="scrolling-box">
              <section id="1">This is the first section</section>
              <section id="2">This is the second section</section>
              <section id="3">This is the third section</section>
            </div>
          </div>
          <div class="col-3">
            <a href="#class1">Bottom</a>
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

// Props can be passed to the element to define what ids are being selected.
// this
//
//<a href="#1">1</a>
//<a href="#2">2</a>
//<a href="#3">3</a>
//
//could look like this.
//
//<a href={prop1}>1</a>
//<a href={prop2}>2</a>
//<a href={prop3}>3</a>
