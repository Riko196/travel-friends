import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ISODateStringTostringDate } from "../../utils/functions";

import "./MyFriendsDetail.css";

class MyFriendsDetail extends Component {
  render() {
    const { detail, destinationName, planned } = this.props;
    let profilePhoto = null;
    try {
      profilePhoto = require(`../../images/profilePhotos/profile_picture_${
        detail.userId
      }.jpeg`);
    } catch (err) {
      profilePhoto = require("../../images/profilePhotos/profile_picture_default.svg");
    }

    return (
      <div className="my-friend-detail-container">
        <div className="planned-banner">
          <p>Planned trip</p>
        </div>
        <Link
          to={`/home/my-friends/profile/${detail.userId}`}
          key={detail.userId}
        >
          <div>
            <img
              src={profilePhoto}
              alt={"Friend"}
              className="image-profile-friend"
            />
            <p className="friend-name-detail">{detail.name}</p>
          </div>
        </Link>
        {planned === false && (
          <p className="detailp">
            Will be in {destinationName} from{" "}
            {ISODateStringTostringDate(detail.dateFrom)} to{" "}
            {ISODateStringTostringDate(detail.dateTo)}
          </p>
        )}
        <p className="detailp2">About: {detail.aboutme}</p>
        <div className="buttons">
          <Link
            to={`/home/my-friends/profile/${detail.userId}`}
            key={detail.userId}
          >
            <div className="profile-button">
              <p>Profile</p>
            </div>
          </Link>
          <div className="contact-button">
            <a
              href={"https://m.me/" + detail.userName}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Contact</p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default MyFriendsDetail;
