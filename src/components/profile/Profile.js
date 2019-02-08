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
          <div className="row">
            <div className="column" id="photo">
              <img className="profile-photo" src={this.props.user.profilePhoto} alt="Profile"/>
              <p className="name-age-country">{this.props.user.name}</p>
            </div>
            <div className="column">
              <p className="name-age-country-hidden">Ivan</p>
              <p className="about-me">About Me: </p>
              <p className="birthday">day/month/year</p>
            </div>
            <div className="column">
              <p className="country">Country: </p>
              <p className="city">City: </p>
              <p className="occupation">Occupation: </p>
              <p className="joined">Joined: </p>
              <p className="gender">Gender: </p>
              <p className="relationship">Relationship: </p>
            </div>
            <div className="column">  
              <p className="education">Education: </p>
              <p className="smoking">Smoking: </p>
              <p className="drinking">Drinking: </p>
              <p className="speaking">Speaking: </p>
              <p>{this.props.user.email}</p>
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
