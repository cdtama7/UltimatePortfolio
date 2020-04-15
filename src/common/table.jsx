import React, { Component } from "react";
import "./table.css";

class Table extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="backgroundskills">
          <br></br>
          <div className="wrappertable row justify-content-center">
            <div className="row col-6 justify-content-center tablebox">
              <div className="col-xs-7 col-sm-7 col-md-7 col-lg-6 col-xl-6 centeredtext">
                <h5>Front-end</h5>
                <p>
                  I like coding things from scratch, adding beautiful styling to
                  make it visually gorgeous.
                </p>
                <br></br>
                <h6>Languages I speak:</h6>
                <br></br>
                <p>HTML, CSS, JavaScript, ReactJs</p>
                <br></br>
                <h6>Dev Tools:</h6>
                <p>Atom</p>
                <p>Bootstrap</p>
                <p>Github</p>
                <p>Gitlab</p>
                <p>Git Bash</p>
              </div>
              <div className="col-xs-7 col-sm-7 col-md-7 col-lg-6 col-xl-6 linewithin centeredtext">
                <h5>Back-end</h5>
                <p>
                  I enjoy coding great and useful sites. I love making my code
                  clean and efficient.
                </p>
                <br></br>
                <h6>Experienced in:</h6>
                <br></br>
                <p>JAVA 13, MySQL, NodeJS, Mongoose, Express</p>
                <br></br>
                <h6>Dev Tools:</h6>
                <p>IntelliJ</p>
                <p>MySQL Workbench</p>
                <p>Robo 3T</p>
                <p>VS Code</p>
              </div>
            </div>
          </div>
        </div>
        <div className="occupyheight"></div>
      </React.Fragment>
    );
  }
}

export default Table;
