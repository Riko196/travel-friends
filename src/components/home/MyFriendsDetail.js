import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./MyFriendsDetail.css";

class MyFriendsDetail extends Component {
  render() {
    return (
      <div className="my-friend-detail-container">
        <div className="planned-banner">
          <p>Planned trip</p>
        </div>
        <Link
          to={`/home/my-friends/profile/${this.props.detail.userId}`}
          key={this.props.detail.userId}
        >
          <div>
            <img src={this.props.detail.profilePhoto} alt={"Friend"} className="image-profile-friend"/>
            <p className="friend-name-detail">{this.props.detail.name}</p>
          </div>
        </Link>
        <p className="detailp">Will be in {this.props.destinationName} from [...] to [...]</p>
        <p className="detailp">About: ...</p>
        <div className="buttons">
        <Link
          to={`/home/my-friends/profile/${this.props.detail.userId}`}
          key={this.props.detail.userId}
        >
          <div className="profile-button">
            <p>Profile</p>
          </div>
        </Link>
        <div className="contact-button">
          <p>Contact</p>
        </div>
        </div>
      </div>
    );
  }
}

export default MyFriendsDetail;
