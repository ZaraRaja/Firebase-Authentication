import React, { Component } from "react";
import firebase from "firebase";
import "firebase/firestore";
import fire from "./fire";
import NavBar from "./Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
const firestore = firebase.firestore();

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      password: "",
      email: "",
      dob: "",
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handlefullName = this.handlefullName.bind(this);
    this.handleDOB = this.handleDOB.bind(this);
    this.onRegister = this.onRegister.bind(this);
  }

  onRegister(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((resp) => {
        return firestore.collection("users").doc(this.state.email).set({
          fullName: this.state.fullName,
          email: this.state.email,
          dob: this.state.dob,
        });
      })
      .catch((err) => {
        console.log("Response", err);
        alert(err);
      });

    alert("Sign up Successfully");
    this.props.history.push("/sign-in");
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value,
    });
    console.log("Email", this.state.email);
  }
  handleDOB(e) {
    this.setState({
      dob: e.target.value,
    });
    console.log("dob", this.state.dob);
  }
  handlePassword(e) {
    this.setState({
      password: e.target.value,
    });
    console.log("Password", this.state.password);
  }
  handlefullName(e) {
    this.setState({
      fullName: e.target.value,
    });
    console.log("Full Name", this.state.fullName);
  }

  render() {
    return (
      <div>
        <NavBar />
   
        <form>
          <h3>Sign Up</h3>

          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Full name"
              value={this.state.fullName}
              onChange={this.handlefullName}
            />
          </div>

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
          <div className="form-group">
            <label>Date of Birth</label>
            <input
              type="date"
              className="form-control"
              placeholder="Enter DOB"
              value={this.state.dob}
              onChange={this.handleDOB}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={this.state.password}
              onChange={this.handlePassword}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={this.onRegister}
          >
            Sign Up
          </button>
          {/* <p className="forgot-password text-right">
            Already registered <span>Already registered?</span>
          </p> */}
          <Link to="/sign-in"> <p className="forgot-password text-right forget-pas">
            Already Registered? Sign-in </p>
           </Link>
        </form>
      </div>
    );
  }
}
