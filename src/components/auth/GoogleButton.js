import React, { Component } from "react";
import GoogleLogin from "react-google-login";

//1R4SKAReIC2vOiq8YpnEdgCL
class GoogleButton extends Component {
  responseGoogle = response => {
    console.log(response);
  };

  render() {
    return (
      <div className="google-login">
        <GoogleLogin
          clientId="224446354451-1hb6ivlaalsa2jptlncsl1ur11us5v6u.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
        />
      </div>
    );
  }
}

export default GoogleButton;
