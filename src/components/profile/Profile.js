import React, { Component } from "react";
import { connect } from "react-redux";
import profile from "../../images/mockup/profile.jpg";
import ProfileGallery from "../profileGallery/ProfileGallery";
import ProfileTrips from "../profileTrips/ProfileTrips";
import "./Profile.css";

class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <div className="profile-div">
          <div className="personal-info">
            <div className="profile-basic">
              <img className="profile-photo" src={profile} alt="Profile"/>
              <p className="name-age-country">Ivan</p>
            </div>
            <div className="about-and-birth">
              <p className="about-me">About Me: </p>
              <p className="birthday">day/month/year</p>
            </div>
            <div className="info-one">
              <p className="country">Country: </p>
              <p className="city">City: </p>
              <p className="occupation">Occupation: </p>
              <p className="joined">Joined: </p>
              <p className="gender">Gender: </p>
              <p className="relationship">Relationship: </p>
            </div>
            <div className="info-two">  
              <p className="education">Education: </p>
              <p className="smoking">Smoking: </p>
              <p className="drinking">Drinking: </p>
              <p className="speaking">Speaking: </p>
              <p>agarskyivan@gmail.com</p>
              <button className="edit-profile">
                Edit profile
              </button>
            </div>
          </div>
          <div className="travel-plan">
            <ProfileTrips/>  
          </div>
          <ProfileGallery/>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    user: state.user
  }),
  {}
)(Profile);
