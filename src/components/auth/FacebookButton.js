import React, { Component } from "react";
import { compose } from "redux";
import { has, isEmpty, merge } from "lodash";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logIn, getUser } from "../../actions/auth";
import { updateUser } from "../../actions/user";
import { Login } from "react-facebook";
//import facebookIcon from "../../images/mockup/facebook.svg";
import "./FacebookButton.css";

class FacebookButton extends Component {
  handleResponse = response => {
    if (
      !has(response, "tokenDetail.accessToken") ||
      !has(response, "profile.email")
    ) {
      return;
    }
    console.log(response);
    this.profilePictureRequest(response);
  };

  profilePictureRequest = response => {
    const id = response.profile.id;
    const user = {
      accessToken: response.tokenDetail.accessToken,
      name: response.profile.name,
      email: response.profile.email
    };

    window.FB.api(
      `/${id}?fields=picture.width(720).height(720)&access_token=${
        user.accessToken
      }`,
      "GET",
      {},
      profilePicture => {
        if (has(profilePicture, "picture.data.url"))
          user.profilePhoto = profilePicture.picture.data.url;
        this.logIn(user);
      }
    );
  };

  logIn = user => {
    getUser(user.email).then(response => {
      if (!isEmpty(response)) {
        updateUser(merge(response, user));
      }
    });

    this.props.logIn(user).then(() => {
      this.props.history.replace("/home");
    });
  };

  handleError = error => {
    console.log(error);
  };

  render() {
    return (
      <div className="facebook-login">
        <Login
          scope="email"
          onCompleted={this.handleResponse}
          onError={this.handleError}
        >
          {({ loading, handleClick, error, data }) => (
            <button className="fb-button" onClick={handleClick}>
              {/* <img src={facebookIcon} /> */}
              {!loading && <span>Login with Facebook</span>}
              {loading && <span>Loading...</span>}
            </button>
          )}
        </Login>
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
