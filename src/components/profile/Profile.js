import React, { Component } from "react";
import { connect } from "react-redux";
import ProfileTrips from "../trip/ProfileTrips";
import EditProfileModal from "./EditProfileModal";
import { getAge } from "../../utils/functions";
import cookie from "react-cookies";

import "./Profile.css";

class Profile extends Component {
  render() {
    const userId = cookie.load("userId");
    let profilePhoto = null;
    try {
      profilePhoto = require(`../../images/profilePhotos/profile_picture_${userId}.jpeg`);
    } catch (err) {
      profilePhoto = require("../../images/profile_picture_default.svg");
    }

    return (
      <div className="profile-container">
        <div className="profile-div">
          <div className="row">
            <img className="profile-photo" src={profilePhoto} alt="Profile" />
            <p className="name-age-country">
              {this.props.user.name}
              {getAge(this.props.user.birthday)}
            </p>
            <p className="about-me">
              <span style={{ fontStyle: "oblique", fontWeight: "700" }}>
                About Me:{" "}
              </span>
              {this.props.user.aboutme}
            </p>
            <p className="country">
              <span style={{ fontStyle: "oblique", fontWeight: "700" }}>
                Country:{" "}
              </span>{" "}
              {this.props.user.country}
            </p>
            <p className="email">
              <span style={{ fontStyle: "oblique", fontWeight: "700" }}>
                Email:{" "}
              </span>{" "}
              {this.props.user.email}
            </p>
            <div className="to-right-align">
              <EditProfileModal />
            </div>
          </div>
          <div className="travel-plan">
            <ProfileTrips />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ user: state.user }),
  {}
)(Profile);
