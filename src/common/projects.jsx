import React, { Component } from "react";
import recipeasy from "../recipeasy.png";
import classy from "../classyrevision.jpg";
import ras from "../ras.png";
class Projects extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h2>Projects</h2>
          <hr></hr>
          <div
            id="multi-item-example"
            className="carousel slide carousel-multi-item carousel-multi-item-2 m-2"
            data-ride="carousel"
          >
            <div className="carousel-inner" role="listbox">
              <div class="col-md-3 mb-3">
                <a href="https://moorejandy.github.io/Team-Three/">
                  <img className="img-fluid" src={ras} alt="classy" />
                </a>
              </div>

              <div class="col-md-3 mb-3">
                <a href="https://moorejandy.github.io/Team-Three/">
                  <img className="img-fluid" src={classy} alt="classy" />
                </a>
              </div>

              <div class="col-md-3 mb-3">
                <a href="https://recipeasy.co/">
                  <img className="img-fluid" src={recipeasy} alt="recipeasy" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;
