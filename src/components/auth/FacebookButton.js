import React, { Component } from "react";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { authConfig } from "../../utils/config";
import { facebookLogin } from "../../actions/auth";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import "./LoginButton.css"

class FacebookButton extends Component {
  responseFacebook = response => {
    console.log(response);
    if (response.accessToken === undefined) {
      return;
    }
    this.props.facebookLogin({
      name: response.name,
      email: response.email,
      profilePhoto: response.picture.data.url
    });
    this.props.history.replace("/home");
  };

  render() {
    return (
      <div className="facebook-login">
        <FacebookLogin
          appId={authConfig.facebookId}
          fields="name,email,picture"
          callback={this.responseFacebook}
          render={renderProps => (
            <button className="fb-button" onClick={renderProps.onClick}><i id="fbicon" className="fab fa-facebook-f"></i>Login with Facebook</button>
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
    { facebookLogin }
  )
)(FacebookButton);
