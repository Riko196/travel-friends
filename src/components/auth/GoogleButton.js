import React, { Component } from "react";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { googleLogin } from "../../actions/auth";
import { authConfig } from "../../utils/config";
import GoogleLogin from "react-google-login";
import "./LoginButton.css"

class GoogleButton extends Component {
  responseGoogle = response => {
    //console.log(response);
    if (response.accessToken === undefined) {
      return;
    }
    this.props.googleLogin(response);
    this.props.history.replace("/home");
  };

  loginFailed = response => {
    console.log(response);
  };

  render() {
    return (
      <div className="google-login">
        <GoogleLogin
          clientId={authConfig.googleId}
          buttonText="Login with Google"
          onSuccess={this.responseGoogle}
          onFailure={this.loginFailed}
          render={renderProps => (
            <button className="g-button" onClick={renderProps.onClick}><i id="g-icon" className="fab fa-google"></i>Login with Google</button>
          )}
        />
      </div>
    );
  }
}

export default compose(
  withRouter,
  connect(
    null,
    { googleLogin }
  )
)(GoogleButton);
