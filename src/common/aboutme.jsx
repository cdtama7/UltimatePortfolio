/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import logo from "./laindicada.png";

class AboutMe extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h2>About me</h2>
          <hr></hr>
          <div className="row">
            <div className="col-xs-4 col-sm-5 col-md-4 col-lg-3 col-xl-3">
              <img
                className="w3-circle profilepic"
                src={logo}
                alt="Card image cap"
              />
            </div>
            <div className="col-xs-4 col-sm-7 col-md-7 col-lg-7 col-xl-7">
              <p>My name is Carlos De Castro.</p>
              <p>
                I am a Full Stack web/mobile Developer with a bachelor’s degree
                in business management. A team player, collaborator and
                passionate individual when working on multi-page applications
                with other developers.
              </p>
              <p>
                I am driven by learning opportunities and growth. I am excited
                to work with others to create great experiences for web and
                mobile devices.
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AboutMe;
