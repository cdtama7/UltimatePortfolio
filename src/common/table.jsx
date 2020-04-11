import React, { Component } from "react";
import "./table.css";

class Table extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="wrappertable row justify-content-center">
          <div className="col-3 centeredtext">
            <h3>Front-end Developer</h3>
            <p>I value beauty in my work.</p>
            <br></br>
            <h4>Languages I speak:</h4>
            <br></br>
            <p>HTML, CSS, JavaScript, ReactJs</p>
          </div>
          <div className="col-3 centeredtext">
            <h3>Back-end Developer</h3>
            <p>I enjoy coding great and useful sites.</p>
            <br></br>
            <h4>Experienced in:</h4>
            <br></br>
            <p>JAVA 13, MySQL, NodeJS, Mongoose, Express</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Table;
