import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Contact from "./common/contact.jsx";
import { Link, NavLink } from "react-router-dom";
import Projects from "./common/projects.jsx";
import AboutMe from "./common/aboutme";
import "./App.css";
import Table from "./common/table";
import resume from "./resume/Resume Carlos De Castro April 9-2020.docx";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg">
          <div className="navbar-nav">
            <div className="row">
              <div className="col-5">
                <NavLink className="nav-item nav-link a1" to="/">
                  Carlos De Castro
                </NavLink>
              </div>
              <div className="col-2">
                <a className="nav-item nav-link a1" href="#skills">
                  Skills
                </a>
              </div>
              <div className="col-2">
                <a className="nav-item nav-link a1" href="#projects">
                  Projects
                </a>
              </div>
              <div className="col-2">
                <a className="nav-item nav-link a1" href="#contactMe">
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div class="topnav-right">
            <a className="nav-item nav-link a1" href={resume}>
              Download Resume
            </a>
          </div>
        </nav>
        <div id="aboutMe">
          <AboutMe></AboutMe>
        </div>
        <div id="skills">
          <Table></Table>
        </div>
        <br></br>
        <div id="projects">
          <Projects></Projects>
        </div>
        <br></br>
        <div id="contactMe">
          <Contact></Contact>
        </div>
        <br></br>
      </React.Fragment>
    );
  }
}

export default App;
