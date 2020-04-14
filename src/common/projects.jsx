import React, { Component } from "react";
import recipeasyLogo from "../recipeasy.png";
import classyLogo from "../classyrevision.jpg";
import rasLogo from "../ras.png";
import recipeasy from "../Recipeasy-site.png";
import classy from "../Classy-site.png";
import ras from "../RAS-site.png";
import "./projects.css";

class Projects extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container App">
          <h2>Projects</h2>
          <hr></hr>
          <div
            id="multi-item-example"
            className="carousel slide carousel-multi-item carousel-multi-item-2 m-2"
            data-ride="carousel"
          >
            <div className="carousel-inner" role="listbox">
              <div class="col-md-4 mb-3 container1 profilepicdiv">
                <img className="img-fluid image" src={ras} alt="ras" />
                <div class="middle">
                  <a
                    className="a2"
                    href="https://moorejandy.github.io/Team-Three/"
                  >
                    <img
                      className="imagewithin"
                      src={rasLogo}
                      alt="recipeasy"
                    />
                  </a>
                  <p>Find pieces of art from home!</p>
                </div>
              </div>

              <div class="col-md-4 mb-3 container1 profilepicdiv">
                <img className="img-fluid image" src={classy} alt="classy" />
                <div class="middle">
                  <a className="a2" href="https://teamfour.herokuapp.com/">
                    <img
                      className="imagewithin"
                      src={classyLogo}
                      alt="recipeasy"
                    />
                  </a>
                  <p>Connecting Students with tutors!</p>
                </div>
              </div>

              <div class="col-md-4 mb-3 container1 profilepicdiv">
                <img
                  className="img-fluid image"
                  src={recipeasy}
                  alt="recipeasy"
                />
                <div class="middle">
                  <a className="a2" href="https://recipeasy.co/">
                    <img
                      className="imagewithin"
                      src={recipeasyLogo}
                      alt="recipeasy"
                    />
                  </a>
                  <p>Find recipes from what you have on your fridge!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;
