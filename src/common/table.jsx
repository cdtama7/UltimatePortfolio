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
              <div className="col-6 centeredtext">
                <h5>Front-end Developer</h5>
                <p>I value beauty in my work.</p>
                <br></br>
                <h6>Languages I speak:</h6>
                <br></br>
                <p>HTML, CSS, JavaScript, ReactJs</p>
              </div>
              <div className="col-6 linewithin centeredtext">
                <h5>Back-end Developer</h5>
                <p>I enjoy coding great and useful sites.</p>
                <br></br>
                <h6>Experienced in:</h6>
                <br></br>
                <p>JAVA 13, MySQL, NodeJS, Mongoose, Express</p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Table;
