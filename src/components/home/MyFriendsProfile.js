import React, { Component } from "react";
import { connect } from "react-redux";
import ProfileGallery from "../profileGallery/ProfileGallery";
import NavBar from "../navbar/Navbar";

import { ISODateTostringDate } from "../../utils/functions";
//import "./MyFriendsProfile.css";

class MyFriendsProfile extends Component {
  render() {
    return (
      <div className="my-friend-profile-container">
        <NavBar />
        <div className="my-friend-profile-div">
          <div className="row">
            <div className="column" id="photo">
              <img
                className="my-friend-profile-photo"
                src={this.props.myFriend.profilePhoto}
                alt="Profile"
              />
              <p className="name-age-country">{this.props.myFriend.name}</p>
            </div>
            <div className="column">
              <p className="about-me">
                About Me: {this.props.myFriend.aboutme}
              </p>
              <p className="birthday">
                Birthday:{" "}
                {this.props.myFriend.birthday != null &&
                  ISODateTostringDate(this.props.myFriend.birthday)}
              </p>
            </div>
            <div className="column">
              <p className="country">Country: {this.props.myFriend.country}</p>
              <p className="city">City: {this.props.myFriend.city}</p>
              <p className="occupation">
                Occupation: {this.props.myFriend.occupation}
              </p>
              <p className="joined">Joined: </p>
              <p className="gender">Gender: {this.props.myFriend.gender}</p>
              <p className="relationship">
                Relationship: {this.props.myFriend.relationship}
              </p>
            </div>
            <div className="column">
              <p className="education">
                Education: {this.props.myFriend.education}
              </p>
              <p className="smoking">Smoking: {this.props.myFriend.smoking}</p>
              <p className="drinking">
                Drinking: {this.props.myFriend.drinking}
              </p>
              <p className="speaking">
                Speaking: {this.props.myFriend.speaking}
              </p>
              <p>Email: {this.props.myFriend.email}</p>
            </div>
          </div>
          <ProfileGallery />
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    myFriend: state.myFriend
  }),
  {}
)(MyFriendsProfile);
