import React, { Component } from "react";
import Rating from "react-rating";
import emptyStar from "../../images/mockup/empty-star.png";
import fullStar from "../../images/mockup/full-star.png";

import "./DestinationReview.css";

class DestinationReview extends Component {
  render() {
    const { name, rating, reviewText } = this.props;
    return (
      <div className="destination-review">
        <p>Name: {name}</p>
        <Rating
          emptySymbol={
            <img alt="emptySymbol" src={emptyStar} className="icon" />
          }
          fullSymbol={<img alt="fullSymbol" src={fullStar} className="icon" />}
          initialRating={rating}
          readonly
        />
        <p>Review: {reviewText}</p>
      </div>
    );
  }
}

export default DestinationReview;
