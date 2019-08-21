import React, { Component } from "react";
import { compose } from "redux";
import { has, isEmpty, merge } from "lodash";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { insertUser, getUser, setLoggedIn } from "../../actions/auth";
import { updateUser, setUser } from "../../actions/user";
import { Login } from "react-facebook";
import { uploadProfilePhoto } from "../../utils/functions";

import "./FacebookButton.css";

class FacebookButton extends Component {
  handleResponse = response => {
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
        this.communicateWithDatabase(user);
      }
    );
  };

  communicateWithDatabase = user => {
    getUser(user.email).then(response => {
      if (!isEmpty(response)) {
        const updatedUser = merge(response, user);
        try {
          require(`../../images/profilePhotos/profile_picture_${
            updatedUser.userId
          }.jpeg`);
        } catch (err) {
          uploadProfilePhoto(updatedUser.profilePhoto, updatedUser.userId);
        }
        delete updatedUser.profilePhoto;

        updateUser(updatedUser).then(() => {
          this.props.logIn(updatedUser);
          this.props.history.replace("/home");
        });
      } else {
        this.props.insertUser(user).then(userWithUserId => {
          uploadProfilePhoto(user.profilePhoto, userWithUserId.userId);
          delete user.profilePhoto;
          const finalReduxUser = merge(
            { accessToken: user.accessToken },
            userWithUserId
          );
          this.props.logIn(finalReduxUser);
          this.props.history.replace("/home");
        });
      }
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
