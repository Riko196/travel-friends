import React, { Component } from "react";
import DestinationReview from "./DestinationReview";
import { connect } from "react-redux";

import "./DestinationPage.css";

class DestinationPage extends Component {
  render() {
    const { selectedDestination } = this.props;
    return (
      <div className="destination-wrapper">
        <div className="destination-upper-div">
          <img
            alt="destinationPhoto"
            className="destinationPagePhoto"
            src={require(`../../images/cityPhotos/${
              selectedDestination.destinationPhoto
            }`)}
          />
          <p className="destination-page-title">
            {selectedDestination.destinationName}
          </p>
        </div>
        <div className="reviews">
          {selectedDestination.reviews.length !== 0 &&
            selectedDestination.reviews.map(review => {
              return (
                <DestinationReview
                  id={review.reviewId}
                  name={review.name}
                  rating={review.rating}
                  reviewText={review.reviewText}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    selectedDestination: state.selectedDestination
  }),
  {}
)(DestinationPage);
