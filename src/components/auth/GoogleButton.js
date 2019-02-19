import React, { Component } from "react";
import { compose } from "redux";
import { has } from "lodash";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logIn } from "../../actions/auth";
import { authConfig } from "../../utils/config";
import GoogleLogin from "react-google-login";
import "./LoginButton.css";

class GoogleButton extends Component {
  responseGoogle = response => {
    if (!has(response, "accessToken")) {
      return;
    }

    this.props
      .logIn({
        accessToken: response.accessToken,
        name: response.profileObj.name,
        email: response.profileObj.email,
        profilePhoto: response.profileObj.imageUrl
      })
      .then(() => {
        if (has(this.props.user, "email")) {
          this.props.history.replace("/home");
        }
      });
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
            <button className="g-button" onClick={renderProps.onClick}>
              <i id="g-icon" className="fab fa-google" />
              Login with Google
            </button>
          )}
        />
      </div>
    );
  }
}

export default compose(
  withRouter,
  connect(
    state => ({
      user: state.user
    }),
    { logIn }
  )
)(GoogleButton);
