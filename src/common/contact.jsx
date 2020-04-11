import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  resetForm() {
    this.setState({ name: ``, email: ``, message: `` });
  }

  render() {
    return (
      <div className="App container">
        <h2>Contact Me</h2>
        <hr></hr>
        <form
          id="contact-form class1"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div className="form-group notapp">
            <label className="notapp" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onNameChange.bind(this)}
            />
          </div>
          <div className="form-group notapp">
            <label className="notapp" htmlFor="exampleInputEmail1">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              value={this.state.email}
              onChange={this.onEmailChange.bind(this)}
            />
          </div>
          <div className="form-group notapp">
            <label className="notapp" htmlFor="message">
              Message
            </label>
            <textarea
              className="form-control"
              rows="5"
              value={this.state.message}
              onChange={this.onMessageChange.bind(this)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <p></p>
      </div>
    );
  }
}

export default Contact;
