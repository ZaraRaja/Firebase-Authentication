import React, { Component } from "react";
import firebase from "firebase";
import "firebase/firestore";


class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
    };
    this.timeout = null
    this.logout = this.logout.bind(this);
    this.getData = this.getData.bind(this)
  }
  componentDidMount(){
    this.getData();
    setInterval(this.getData, 50); 
  }
  logout(e) {
    firebase.auth().signOut().then(() => {
      localStorage.clear();
      this.props.history.push("/sign-in")
    
    }).catch((error) => {
    alert(error)
    });
  }
  getData(e){
    this.setState({name: localStorage.getItem("name")})
  }

  render() {

    return (
     
      <div>
      
       {window.location.reload}
        Hi, Welcome {localStorage.getItem("name")}. Click here to Logout{" "}
        <button type="button" className="btn btn-primary btn-logout" onClick={this.logout}>
          Logout
        </button>
      </div>
    );
  }
}


export default Welcome;
