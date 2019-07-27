import React, { Component } from "react";
import "./MyFriendsDetail.css";

class MyFriendsDetail extends Component {
  render() {
    return (
      <div className="my-friend-detail-container">
        <img src={this.props.detail.profilePhoto} alt={"Friend"} className="image-profile-friend"/>
        <p className="friend-name-detail">{this.props.detail.name}</p>
      </div>
    );
  }
}

export default MyFriendsDetail;
