import React, { Component } from "react";
import { connect } from "react-redux";
import ProfileGallery from "../profileGallery/ProfileGallery";
import ProfileTrips from "../trip/ProfileTrips";
import NavBar from "../navbar/Navbar";
import EditProfileModal from "./EditProfileModal";
import SelectUserName from "./SelectUserName";
import { ISODateStringTostringDate } from "../../utils/functions";
import "./Profile.css";

class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <NavBar />
        <div className="profile-div">
          <div className="row">
            <div className="column" id="photo">
              <img
                className="profile-photo"
                src={this.props.user.profilePhoto}
                alt="Profile"
              />
              <p className="name-age-country">{this.props.user.name}</p>
            </div>
            <div className="column">
              <p className="about-me">About Me: {this.props.user.aboutme}</p>
              <p className="birthday">
                Birthday:{" "}
                {this.props.user.birthday != null &&
                  ISODateStringTostringDate(this.props.user.birthday)}
              </p>
            </div>
            <div className="column">
              <p className="country">Country: {this.props.user.country}</p>
              <p className="city">City: {this.props.user.city}</p>
              <p className="occupation">
                Occupation: {this.props.user.occupation}
              </p>
              <p className="joined">Joined: </p>
              <p className="gender">Gender: {this.props.user.gender}</p>
              <p className="relationship">
                Relationship: {this.props.user.relationship}
              </p>
            </div>
            <div className="column">
              <p className="education">
                Education: {this.props.user.education}
              </p>
              <p className="smoking">Smoking: {this.props.user.smoking}</p>
              <p className="drinking">Drinking: {this.props.user.drinking}</p>
              <p className="speaking">Speaking: {this.props.user.speaking}</p>
              <p className="email">Email: {this.props.user.email}</p>
              <EditProfileModal />
              <SelectUserName />
            </div>
          </div>
          <div className="travel-plan">
            <ProfileTrips />
          </div>
          <ProfileGallery />
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ user: state.user }),
  {}
)(Profile);
