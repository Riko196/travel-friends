import React, { Component } from "react";
import { compose } from "redux";
import { has, isEmpty, merge } from "lodash";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { insertUser, getUser, setLoggedIn } from "../../actions/auth";
import { updateUser, setUser } from "../../actions/user";
import { Login } from "react-facebook";
import { uploadProfilePhoto } from "../../utils/functions";
import cookie from "react-cookies";

import "./FacebookButton.css";

class FacebookButton extends Component {
  handleResponse = response => {
    if (process.env.REACT_APP_NODE_ENV === "development") {
      console.log(response);
    }
    if (
      !has(response, "tokenDetail.accessToken") ||
      !has(response, "profile.email")
    ) {
      return;
    }
    this.profilePictureRequest(response);
  };

  profilePictureRequest = response => {
    const id = response.profile.id;
    const user = {
      name: response.profile.name,
      email: response.profile.email
    };

    window.FB.api(
      `/${id}?fields=picture.width(720).height(720)&access_token=${response.tokenDetail.accessToken}`,
      "GET",
      {},
      profilePicture => {
        if (has(profilePicture, "picture.data.url"))
          user.profilePhoto = profilePicture.picture.data.url;
        this.communicateWithDatabase(user, response.tokenDetail.accessToken);
      }
    );
  };

  communicateWithDatabase = (user, facebookToken) => {
    cookie.save("facebookToken", facebookToken);

    getUser(user)
      .then(response => {
        if (!isEmpty(response)) {
          const updatedUser = merge(response, user);
          try {
            require(`../../images/profilePhotos/profile_picture_${updatedUser.userId}.jpeg`);
          } catch (err) {
            uploadProfilePhoto(updatedUser.profilePhoto);
          }

          delete updatedUser.profilePhoto;
          cookie.save("userId", updatedUser.userId);
          updateUser(updatedUser).then(() => {
            this.logIn(updatedUser);
          });
        } else {
          uploadProfilePhoto(user.profilePhoto);
          delete user.profilePhoto;
          this.props.insertUser(user).then(userWithUserId => {
            this.logIn(userWithUserId);
          });
        }
      })
      .catch(error => {
        alert("Login failed!");
        if (process.env.REACT_APP_NODE_ENV === "development") {
          console.log(error);
        }
      });
  };

  logIn = user => {
    if (!user) {
      alert("Login failed!");
      return;
    }
    cookie.save("userId", user.userId);
    cookie.save("token", user.token);
    if (user.userId) delete user.userId;
    delete user.token;

    this.props.logIn(user);
    this.props.history.replace("/logged-in/home");
  };

  handleError = error => {
    if (process.env.REACT_APP_NODE_ENV === "development") {
      console.log(error);
    }
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
              {<i className="fab fa-facebook-square space-after" />}
              {!loading && (
                <span className="facebook">Continue with FACEBOOK</span>
              )}
              {!loading && (
                <p className="annotation">
                  *we will never post to your facebook
                </p>
              )}
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
    dispatch => ({
      insertUser,
      logIn: user => {
        dispatch(setUser(user));
        dispatch(setLoggedIn(true));
      }
    })
  )
)(FacebookButton);
