import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import Rating from "react-rating";
import {
  ISODateStringTostringDate,
  getDefaultValue,
  isInputValid
} from "../../utils/functions";
import { textareaMaxLength } from "../../utils/constants";
import { Link } from "react-router-dom";
import { deleteTrip } from "../../actions/trips";
import { editReview } from "../../actions/review";
import emptyStar from "../../images/mockup/empty-star.png";
import fullStar from "../../images/mockup/full-star.png";
import { editReviewModalStyle } from "./EditReviewModalStyle";

import "./TripDetail.css";

Modal.setAppElement(document.getElementById("root"));
class TripDetail extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      rating: 0
    };

    this.reviewText = React.createRef();
  }

  openModal = () => {
    this.setState({
      modalIsOpen: true,
      rating: this.props.detail.rating === null ? 0 : this.props.detail.rating
    });
  };

  closeModal = () => {
    this.setState({
      modalIsOpen: false
    });
  };

  deleteTrip = e => {
    this.props.deleteTrip(this.props.detail.tripId, this.props.user);
  };

  inputIsCorrect = () => {
    if (!isInputValid(this.reviewText.current.value)) {
      alert("Unallowed characters!");
      return false;
    }
    return true;
  };

  editReview = e => {
    if (this.inputIsCorrect()) {
      this.props.editReview({
        userId: this.props.user.userId,
        tripId: this.props.detail.tripId,
        reviewText: this.reviewText.current.value,
        rating: this.state.rating
      });
      this.closeModal();
    }
  };

  editRate = rating => {
    this.setState({
      rating: rating
    });
  };

  render() {
    const dateFrom = ISODateStringTostringDate(this.props.detail.dateFrom);
    const dateTo = ISODateStringTostringDate(this.props.detail.dateTo);
    let cityPhotoUrl = null;
    try {
      cityPhotoUrl = require(`../../images/cityPhotos/${this.props.detail.destinationPhoto}`);
    } catch (err) {
      cityPhotoUrl = null;
    }

    return (
      <div className="trip-div">
        <div className="half">
          <Link
            to={`/logged-in/destination/${this.props.detail.destinationId}`}
          >
            {cityPhotoUrl !== null && (
              <img
                className="destination-image-detail"
                src={cityPhotoUrl}
                alt="TripsPhoto"
              />
            )}
          </Link>
          <p className="trip-place">{this.props.detail.destinationName}</p>
        </div>
        <div className="half-2">
          <div className="trip-dates">
            <p className="trip-date">from: {dateFrom}</p>
            <p className="trip-date">to: {dateTo}</p>
          </div>
          {this.props.planned === true && (
            <button className="delete-trip-btn" onClick={this.deleteTrip} />
          )}
        </div>
        {this.props.planned === false && (
          <div>
            <button className="open-modal-btn" onClick={this.openModal} />
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              contentLabel="Edit review"
              style={editReviewModalStyle}
            >
              <input
                type="button"
                name="exit"
                value="X"
                onClick={this.closeModal}
                className="x-button"
              />
              <div className="center-rating">
                <Rating
                  emptySymbol={
                    <img alt="emptySymbol" src={emptyStar} className="icon" />
                  }
                  fullSymbol={
                    <img alt="fullSymbol" src={fullStar} className="icon" />
                  }
                  initialRating={this.state.rating}
                  onChange={rating => this.editRate(rating)}
                />
              </div>
              <textarea
                type="text"
                className="textarea"
                id="editReview"
                ref={this.reviewText}
                maxLength={textareaMaxLength}
                defaultValue={getDefaultValue(this.props.detail.reviewText)}
              />

              <input
                type="button"
                value="Save review"
                className="edit-review"
                onClick={this.editReview}
              />
            </Modal>
          </div>
        )}
        <div className="trip-info-div">
          <p className="trip-info-p">{this.props.detail.tripInfo}</p>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ user: state.user }),
  { deleteTrip, editReview }
)(TripDetail);
