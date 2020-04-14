/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import logo from "./laindicada.png";
import "./aboutme.css";

class AboutMe extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row justify-content-center">
            <div className="profilepicdiv col-xs-7 col-sm-7 col-md-7 col-lg-7 col-xl-7 center">
              <h2>Full-Stack Web Developer</h2>
            </div>

            <div className="profilepicdiv col-xs-7 col-sm-7 col-md-7 col-lg-7 col-xl-7 center">
              <img
                className="w3-circle profilepic"
                src={logo}
                alt="Card image cap"
              />
            </div>
          </div>
        </div>
        <div className="divdescrip row justify-content-center">
          <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 col-xl-9 center nameh2">
            <h2 className="h21">Hello there! I am Carlos!</h2>
          </div>
          <div className="col-xs-7 col-sm-7 col-md-6 col-lg-6 col-xl-4 center nameh2">
            <p className="descrip">
              I am a Full Stack web/mobile Developer with a bachelor’s degree in
              business management. A team player, collaborator and passionate
              individual when working on multi-page applications with other
              developers.
            </p>
            <p className="descrip">
              I am driven by learning opportunities and growth. I am excited to
              work with others to create great experiences for web and mobile
              devices.
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AboutMe;
