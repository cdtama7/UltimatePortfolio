import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Contact from "./common/contact.jsx";
import NavBar from "./common/navbar.jsx";
import Projects from "./common/projects.jsx";
import AboutMe from "./common/aboutme";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <AboutMe></AboutMe>
        <br></br>
        <Projects></Projects>
        <br></br>
        <Contact></Contact>
        <br></br>
      </React.Fragment>
    );
  }
}

export default App;
