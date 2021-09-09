import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AppOnecss.css";

import axios from "axios";

class AppOne extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      username: "",
      email: "",
      password: "",
    };
    this.changeFullName = this.changeFullName.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.onSubmitLili = this.onSubmitLili.bind(this);
  }

  changeFullName(event) {
    this.setState({
      fullName: event.target.value,
    });
  }

  changeUsername(event) {
    this.setState({
      username: event.target.value,
    });
  }
  changeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }
  changePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  onSubmitLili(event) {
    event.preventDefault();

    const registered = {
      fullName: this.state.fullName,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    //send the registered to the backend
    axios
      .post("http://localhost:4230/app/signup", registered)
      .then((response) => console.log(response.data));

    //window.location(./home);

    this.setState({
      fullName: "",
      username: "",
      password: "",
      email: "",
    });
  }

  render() {
    return (
      <div>
        <div class="container register-form">
          <div class="form">
            <div class="note">
              <p>This is a simpleRegister Form made using Boostrap.</p>
            </div>

            <div class="form-content">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your Name *"
                      value=""
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control mb-3"
                      placeholder="Phone Number *"
                      value=""
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group mb-3">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Your Password *"
                      value=""
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control mb-3"
                      placeholder="Confirm Password *"
                      value=""
                    />
                  </div>
                </div>
              </div>
              <button type="button" class="btnSubmit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppOne;
