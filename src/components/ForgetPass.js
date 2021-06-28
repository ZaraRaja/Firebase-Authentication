import React, { Component } from "react";
import firebase from "firebase";
import "firebase/firestore";
import NavBar from "./Navbar";

export default class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.forgetPassword = this.forgetPassword.bind(this);
  }

  forgetPassword(e) {
    e.preventDefault();
    firebase
      .auth()
      .sendPasswordResetEmail(this.state.email)
      .then(() => {
        console.log("Email send");
        alert("Please check your email to reset password.Thanks");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(error.message);
      });
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value,
    });
    console.log("Email", this.state.email);
  }

  render() {
    return (
      <div>
        <NavBar />

        <form>
          <h3>Forget Password</h3>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleEmail}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={this.forgetPassword}
          >
            Send Email
          </button>
        </form>
      </div>
    );
  }
}
