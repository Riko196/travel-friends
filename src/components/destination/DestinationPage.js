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
              {"There are great varieties of tourist attractions in Bangkok, mostly historical attractions and temples with elaborate architectures and arts. The most famous temples include Wat Phra Kaew, Wat Pho, Wat Arun, Wat Phu Khao Thong, Wat Ratchanadda, Wat Traimit, Wat Benchamabophit, Wat Bowon, and Wat Sutat. There are palaces, museums, parks, and a wide array of shopping centers, from luxury malls to flea markets and street markets such as Chatuchak Weekend Market, Sampeng Market, and Pahurat Textile Market. Bangkok nightlife is another highlight that has attracted many tourists from all over the world. https://www.tourismthailand.org/About-Thailand/Destination/Bangkok"}
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
