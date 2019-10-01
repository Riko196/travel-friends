import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { getMyFriend } from "../../actions/myFriends";
import Loading from "../helpful/Loading";
import { getAge } from "../../utils/functions";
import { Redirect } from "react-router-dom";
import { isEmpty } from "lodash";
import { facebookMessengerURL } from "../../utils/config";

import "./MyFriendsProfile.css";

class MyFriendsProfile extends Component {
  constructor() {
    super();

    this.state = {
      myFriendLoaded: false,
      error: false
    };
  }

  componentDidMount() {
    const { friendsUserId, myUserId, getMyFriend } = this.props;
    if (friendsUserId === myUserId) {
      this.props.history.replace("/logged-in/profile");
      return;
    }

    if (isNaN(friendsUserId)) {
      this.setState({ error: true });
      return;
    }

    this.setState({ myFriendLoaded: false });
    getMyFriend(friendsUserId).then(() => {
      if (isEmpty(this.props.selectedFriend)) {
        this.setState({ error: true });
      } else {
        this.setState({ myFriendLoaded: true, error: false });
      }
    });
  }

  DateFromStringDate(dateString) {
    var birthDate = new Date();
    birthDate.setDate(dateString.substring(0, 2));
    birthDate.setMonth(dateString.substring(3, 5));
    birthDate.setFullYear(dateString.substring(6, 10));
    return (
      new Date(birthDate).getDate() +
      " " +
      new Date(birthDate).toLocaleString("default", { month: "long" }) +
      " " +
      new Date(birthDate).getFullYear()
    );
  }

  render() {
    if (this.state.error) {
      return <Redirect to="/logged-in/page-not-found" />;
    }

    if (this.state.myFriendLoaded === false) {
      return <Loading />;
    }

    let profilePhoto = null;
    try {
      profilePhoto = require(`../../images/profilePhotos/profile_picture_${this.props.selectedFriend.userId}.jpeg`);
    } catch (err) {
      profilePhoto = require("../../images/profile_picture_default.svg");
    }

    return (
      <div className="my-friend-profile-container">
        <div className="my-friend-profile-div">
          <div className="row">
            <div id="photo">
              <img
                className="my-friend-profile-photo"
                src={profilePhoto}
                alt="Profile"
              />
              <p className="name-age-country">
                {this.props.selectedFriend.name}
                {getAge(this.props.selectedFriend.birthday)}
              </p>
            </div>
            <div className="column-2">
              <p className="about-me">
                <span style={{ fontStyle: "oblique", fontWeight: "700" }}>
                  About Me:{" "}
                </span>
                {this.props.selectedFriend.aboutme}
              </p>
            </div>
            <p className="country">
              <span style={{ fontStyle: "oblique", fontWeight: "700" }}>
                Country:{" "}
              </span>
              {this.props.selectedFriend.country}
            </p>
            <div className="right-align">
              {this.props.selectedFriend.userName !== null && (
                <div className="contact-button right">
                  <a
                    href={
                      facebookMessengerURL + this.props.selectedFriend.userName
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p id="size">Contact</p>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default compose(
  withRouter,
  connect(
    (state, props) => {
      const friendsUserId = Number(props.match.params.userId);

      return {
        friendsUserId,
        myUserId: state.user.userId,
        selectedFriend: state.selectedFriend
      };
    },
    { getMyFriend }
  )
)(MyFriendsProfile);
