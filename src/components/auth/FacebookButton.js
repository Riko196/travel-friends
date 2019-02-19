import React, { Component } from "react";
import { compose } from "redux";
import { has } from "lodash";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { authConfig } from "../../utils/config";
import { logIn } from "../../actions/auth";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import "./LoginButton.css";

class FacebookButton extends Component {
  responseFacebook = response => {
    if (!has(response, "accessToken")) {
      return;
    }

    this.props
      .logIn({
        name: response.name,
        email: response.email,
        profilePhoto: response.picture.data.url
      })
      .then(() => {
        if (has(this.props.user, "email")) {
          this.props.history.replace("/home");
        }
      });
  };

  render() {
    return (
      <div className="facebook-login">
        <FacebookLogin
          appId={authConfig.facebookId}
          fields="name,email,picture"
          callback={this.responseFacebook}
          render={renderProps => (
            <button className="fb-button" onClick={renderProps.onClick}>
              <i id="fbicon" className="fab fa-facebook-f" />
              Login with Facebook
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
)(FacebookButton);
