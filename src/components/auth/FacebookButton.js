import React, { Component } from "react";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { authConfig } from "../../utils/config";
import { facebookLogin } from "../../actions/auth";
import FacebookLogin from "react-facebook-login";

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
    this.props.history.replace("/profile");
  };

  render() {
    return (
      <div className="facebook-login">
        <FacebookLogin
          appId={authConfig.facebookId}
          fields="name,email,picture"
          callback={this.responseFacebook}
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
