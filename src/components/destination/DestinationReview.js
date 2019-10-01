import React, { Component } from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import emptyStar from "../../images/mockup/empty-star.png";
import fullStar from "../../images/mockup/full-star.png";

import "./DestinationReview.css";

class DestinationReview extends Component {
  render() {
    const { name, rating, reviewText, userId } = this.props;
    let profilePhoto = null;
    try {
      profilePhoto = require(`../../images/profilePhotos/profile_picture_${userId}.jpeg`);
    } catch (err) {
      profilePhoto = require("../../images/profile_picture_default.svg");
    }

    return (
      <div className="destination-review">
        <div className="inline-row">
          <div className="review-picture">
            <img alt="reviewer" className="reviewer" src={profilePhoto} />
          </div>
          <div className="name-rating">
            <p className="review-owner">
              <Link to={`/logged-in/home/my-friends/profile/${userId}`}>
                {name}
              </Link>
            </p>
            <div className="rating-stars">
              <Rating
                emptySymbol={
                  <img alt="emptySymbol" src={emptyStar} className="icon" />
                }
                fullSymbol={
                  <img alt="fullSymbol" src={fullStar} className="icon" />
                }
                initialRating={rating}
                readonly
              />
            </div>
          </div>
        </div>
        <p className="review-text">{reviewText}</p>
      </div>
    );
  }
}

export default DestinationReview;
