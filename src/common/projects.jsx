import React, { Component } from "react";
import recipeasy from "../recipeasy.png";
import classy from "../classyrevision.jpg";
import ras from "../ras.png";
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
              <div class="col-md-3 mb-3 container1">
                <img className="img-fluid image" src={ras} alt="ras" />
                <div class="middle">
                  <a href="https://moorejandy.github.io/Team-Three/">
                    Regal Art Search
                  </a>
                </div>
              </div>

              <div class="col-md-3 mb-3 container1">
                <img className="img-fluid image" src={classy} alt="classy" />
                <div class="middle">
                  <a href="https://teamfour.herokuapp.com/">Classy</a>
                </div>
              </div>

              <div class="col-md-3 mb-3 container1">
                <img
                  className="img-fluid image"
                  src={recipeasy}
                  alt="recipeasy"
                />
                <div class="middle">
                  <a href="https://recipeasy.co/">Recipeasy</a>
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
