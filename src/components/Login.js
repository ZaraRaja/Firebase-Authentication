import React, { Component } from "react";
import firebase from "firebase";
import "firebase/firestore";
import fire from "./fire";
import NavBar from "./Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ForgetPassword from "./ForgetPass";
const firestore = firebase.firestore();

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: "",
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.Login = this.Login.bind(this);
  }

  Login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((resp) => {
        return firestore
          .collection("users")
          .doc(this.state.email)
          .get()
          .then((response) => {
            response.data();
            alert("Login Successfully!");
            var docRef = firestore.collection("users").doc(this.state.email);

            docRef
              .get()
              .then((doc) => {
                if (doc.exists) {
                  console.log("Document data:", doc.data());
                  localStorage.setItem("name", doc.data().fullName);
                } else {
                  // doc.data() will be undefined in this case
                  console.log("No such document!");
                }
              })
              .catch((error) => {
                console.log("Error getting document:", error);
              });
            this.props.history.push("/welcome");
          });
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value,
    });
    console.log("Email", this.state.email);
  }

  handlePassword(e) {
    this.setState({
      password: e.target.value,
    });
    console.log("Password", this.state.password);
  }

  render() {
    return (
      <div>
        <NavBar />
    

        <form>
          <h3>Sign In</h3>

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
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={this.state.password}
              onChange={this.handlePassword}
            />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={this.Login}
          >
            Submit
          </button>
         <Link to="/forget"> <p className="forgot-password text-right forget-pas">
            Forgot password? </p>
           </Link>
        </form>
      </div>
    );
  }
}
