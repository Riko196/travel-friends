import React, { Component } from "react";
import { connect } from "react-redux";
//import ProfileGallery from "../profileGallery/ProfileGallery";
import ProfileTrips from "../trip/ProfileTrips";
import EditProfileModal from "./EditProfileModal";
import SelectUserName from "./SelectUserName";
import { getAge } from "../../utils/functions";
import "./Profile.css";

class Profile extends Component {
  render() {
    let profilePhoto = null;
    try {
      profilePhoto = require(`../../images/profilePhotos/profile_picture_${
        this.props.user.userId
      }.jpeg`);
    } catch (err) {
      profilePhoto = require("../../images/profile_picture_default.svg");
    }

    return (
      <div className="profile-container">
        <div className="profile-div">
          <div className="row">
            <div className="column" id="photo">
              <img className="profile-photo" src={profilePhoto} alt="Profile" />
              <p className="name-age-country">
                {this.props.user.name}
                {getAge(this.props.user.birthday)}
              </p>
            </div>
            <div className="column-2">
              <p className="about-me">
                <span style={{ fontStyle: "oblique", fontWeight: "700" }}>
                  About Me:{" "}
                </span>
                {this.props.user.aboutme}
              </p>
              <p className="birthday">
                <span style={{ fontStyle: "oblique", fontWeight: "700" }}>
                  Birthday:{" "}
                </span>{" "}
                {this.props.user.birthday != null &&
                  new Date(this.props.user.birthday).getDate() +
                    " " +
                    new Date(this.props.user.birthday).toLocaleString(
                      "default",
                      { month: "long" }
                    ) +
                    " " +
                    new Date(this.props.user.birthday).getFullYear()}
              </p>
            </div>
            <div className="column-3">
              <p className="country">
                <span style={{ fontStyle: "oblique", fontWeight: "700" }}>
                  Country:{" "}
                </span>{" "}
                {this.props.user.country}
              </p>
              <p className="city">
                <span style={{ fontStyle: "oblique", fontWeight: "700" }}>
                  City:{" "}
                </span>{" "}
                {this.props.user.city}
              </p>
              <p className="occupation">
                <span style={{ fontStyle: "oblique", fontWeight: "700" }}>
                  Occupation:{" "}
                </span>{" "}
                {this.props.user.occupation}
              </p>
              {/*<p className="joined"><span style={{fontStyle: "oblique", fontWeight: "700"}}>Joined:</span> </p>*/}
              <p className="gender">
                <span style={{ fontStyle: "oblique", fontWeight: "700" }}>
                  Gender:{" "}
                </span>{" "}
                {this.props.user.gender}
              </p>
              <p className="relationship">
                <span style={{ fontStyle: "oblique", fontWeight: "700" }}>
                  Relationship:{" "}
                </span>{" "}
                {this.props.user.relationship}
              </p>
            </div>
            <div className="column-4">
              <p className="education">
                <span style={{ fontStyle: "oblique", fontWeight: "700" }}>
                  Education:{" "}
                </span>{" "}
                {this.props.user.education}
              </p>
              <p className="smoking">
                <span style={{ fontStyle: "oblique", fontWeight: "700" }}>
                  Smoking:{" "}
                </span>{" "}
                {this.props.user.smoking}
              </p>
              <p className="drinking">
                <span style={{ fontStyle: "oblique", fontWeight: "700" }}>
                  Drinking:{" "}
                </span>{" "}
                {this.props.user.drinking}
              </p>
              <p className="speaking">
                <span style={{ fontStyle: "oblique", fontWeight: "700" }}>
                  Speaking:{" "}
                </span>{" "}
                {this.props.user.speaking}
              </p>
              <p className="email">
                <span style={{ fontStyle: "oblique", fontWeight: "700" }}>
                  Email:{" "}
                </span>{" "}
                {this.props.user.email}
              </p>
              <EditProfileModal />
              <SelectUserName />
            </div>
          </div>
          <div className="travel-plan">
            <ProfileTrips />
          </div>
          {/*<ProfileGallery />*/}
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ user: state.user }),
  {}
)(Profile);
