import React, { Component } from "react";
import { compose } from "redux";
import { has } from "lodash";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logIn } from "../../actions/auth";
import { Login } from "react-facebook";
//import facebookIcon from "../../images/mockup/facebook.svg";
import "./FacebookButton.css";

class FacebookButton extends Component {
  handleResponse = response => {
    if (!has(response, "tokenDetail.accessToken")) {
      return;
    }
    let profilePictureUrl = "";

    window.FB.api(
      `/${
        response.profile.id
      }?fields=picture.width(720).height(720)&access_token=${
        response.tokenDetail.accessToken
      }`,
      "GET",
      {},
      profilePicture => {
        if (has(profilePicture, "picture.data.url"))
          profilePictureUrl = profilePicture.picture.data.url;

        this.props
          .logIn({
            accessToken: response.tokenDetail.accessToken,
            name: response.profile.name,
            email: response.profile.email,
            profilePhoto: profilePictureUrl
          })
          .then(() => {
            if (has(this.props.user, "email")) {
              this.props.history.replace("/home");
            }
          });
      }
    );
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
