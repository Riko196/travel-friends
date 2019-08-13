import React, { Component } from "react";
import DestinationReview from "./DestinationReview";
import { getDestinationByDestinationId } from "../../actions/destinations";
import { connect } from "react-redux";
import Loading from "../helpful/Loading";
import { Redirect } from "react-router-dom";
import { isEmpty } from "lodash";

import "./DestinationPage.css";

class DestinationPage extends Component {
  constructor() {
    super();

    this.state = {
      destinationLoaded: false,
      error: false
    };
  }

  componentDidMount() {

    var elements = document.getElementsByClassName("navbar-item");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.setProperty('background-color', "royalblue", 'important');
    };

    const { destinationId, getDestinationByDestinationId } = this.props;

    if (isNaN(destinationId)) {
      this.setState({ error: true });
      return;
    }

    this.setState({ destinationLoaded: false });
    getDestinationByDestinationId(destinationId).then(() => {
      if (isEmpty(this.props.selectedDestination)) {
        this.setState({ error: true });
      } else {
        this.setState({ destinationLoaded: true, error: false });
      }
    });
  }

  render() {
    if (this.state.error) {
      return <Redirect to="/page-not-found" />;
    }

    const { selectedDestination } = this.props;
    const reviews = selectedDestination.reviews.filter(review => {
      return review.rating !== null && review.reviewText !== null;
    });

    if (this.state.destinationLoaded === false) {
      return <Loading />;
    }

    return (
      <div className="destination-wrapper">
        <div className="destination-upper-div">
          <img
            alt="destinationPhoto"
            className="destinationPagePhoto"
            src={require(`../../images/cityPhotos/${
              selectedDestination.destinationPhoto
            }`)}
            onerror="this.onerror=null;this.src='../../images/friends.jpg';"
          />
          <div className="destination-page-title">
            <h1 className="destination-page-title-p">
              {selectedDestination.destinationName}
            </h1>
            <h6 className="destination-description">
              {selectedDestination.aboutDestination}
            </h6>
            <a
              href={selectedDestination.destinationLink}
              target="_blank"
              className="destination-link"
              rel="noopener noreferrer"
            >
              {selectedDestination.destinationLink}
            </a>
          </div>
        </div>
        <div className="reviews">
          {reviews.length !== 0 &&
            reviews.map(review => {
              return (
                <DestinationReview
                  key={review.reviewId}
                  userId={review.userId}
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
  (state, props) => {
    const destinationId = Number(props.match.params.destinationId);

    return {
      destinationId,
      selectedDestination: state.selectedDestination
    };
  },
  { getDestinationByDestinationId }
)(DestinationPage);
