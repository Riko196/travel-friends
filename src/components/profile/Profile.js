import React, { Component } from "react";
import { connect } from "react-redux";
import "./Profile.css";

class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <img src={this.props.user.profilePhoto} alt="Your face" />
        <h1>{this.props.user.name}</h1>
        <h1>{this.props.user.email}</h1>
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
