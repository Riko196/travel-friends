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
          <div className="destination-page-title">
            <h1 className="destination-page-title-p">
            {selectedDestination.destinationName}
            </h1>
            <h6 className="destination-description">
              {selectedDestination.aboutDestination.split('{,}', 100).map(line => {
                if (line.includes("http://") || line.includes("https://")){
                  return (
                    <a href={line} target="_blank">{line}</a>
                  )
                } else {
                return (<div>
                  {line} <br /> 
                </div>
                )}
              })}
            </h6>
          </div>
        </div>
        <div className="reviews">
          {selectedDestination.reviews.length !== 0 &&
            selectedDestination.reviews.map(review => {
              return (
                <DestinationReview
                  key={review.reviewId}
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
