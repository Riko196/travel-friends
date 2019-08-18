import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { getMyFriend } from "../../actions/myFriends";
import Loading from "../helpful/Loading";
import { getAge } from "../../utils/functions";
import { Redirect } from "react-router-dom";
import { isEmpty } from "lodash";

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
      this.props.history.replace("/profile");
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
      return <Redirect to="/page-not-found" />;
    }

    if (this.state.myFriendLoaded === false) {
      return <Loading />;
    }

    let profilePhoto = null;
    try {
      profilePhoto = require(`../../images/profilePhotos/profile_picture_${
        this.props.selectedFriend.userId
      }.jpeg`);
    } catch (err) {
      profilePhoto = require("../../images/profilePhotos/profile_picture_default.svg");
    }

    return (
      <div className="my-friend-profile-container">
        <div className="my-friend-profile-div">
          <div className="row">
            <div className="column" id="photo">
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
              <p className="birthday">
                <span style={{ fontStyle: "oblique", fontWeight: "700" }}>
                  Birthday:{" "}
                </span>{" "}
                {this.props.selectedFriend.birthday != null &&
                  this.DateFromStringDate(this.props.selectedFriend.birthday)}
              </p>
            </div>
            <div className="column-3">
              <p className="country">
                <span style={{ fontStyle: "oblique", fontWeight: "700" }}>
                  Country:{" "}
                </span>
                {this.props.selectedFriend.country}
              </p>
              <p className="city">
                <span style={{ fontStyle: "oblique", fontWeight: "700" }}>
                  City:{" "}
                </span>
                {this.props.selectedFriend.city}
              </p>
              <p className="occupation">
                <span style={{ fontStyle: "oblique", fontWeight: "700" }}>
                  Occupation:{" "}
                </span>
                {this.props.selectedFriend.occupation}
              </p>
              {/*<p className="joined">Joined: </p>*/}
              <p className="gender">
                <span style={{ fontStyle: "oblique", fontWeight: "700" }}>
                  Gender:{" "}
                </span>
                {this.props.selectedFriend.gender}
              </p>
              <p className="relationship">
                <span style={{ fontStyle: "oblique", fontWeight: "700" }}>
                  Relationship:{" "}
                </span>
                {this.props.selectedFriend.relationship}
              </p>
            </div>
            <div className="column-4">
              <p className="education">
                <span style={{ fontStyle: "oblique", fontWeight: "700" }}>
                  Education:{" "}
                </span>
                {this.props.selectedFriend.education}
              </p>
              <p className="smoking">
                <span style={{ fontStyle: "oblique", fontWeight: "700" }}>
                  Smoking:{" "}
                </span>
                {this.props.selectedFriend.smoking}
              </p>
              <p className="drinking">
                <span style={{ fontStyle: "oblique", fontWeight: "700" }}>
                  Drinking:{" "}
                </span>
                {this.props.selectedFriend.drinking}
              </p>
              <p className="speaking">
                <span style={{ fontStyle: "oblique", fontWeight: "700" }}>
                  Speaking:{" "}
                </span>
                {this.props.selectedFriend.speaking}
              </p>
            </div>
          </div>
          {/*<ProfileGallery />*/}
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
