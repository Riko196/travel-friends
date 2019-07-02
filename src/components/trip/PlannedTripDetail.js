import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteTrip } from "../../actions/trips";

import "./PlannedTripDetail.css";

class PlannedTripDetail extends Component {
  deleteTrip = e => {
    this.props.deleteTrip(this.props.detail.tripId);
  };

  render() {
    return (
      <div className="trip-div">
        <div className="half">
          <img
            className="destination-image-detail"
            src={require(`../../images/cityPhotos/${
              this.props.detail.destinationPhoto
            }`)}
            alt="TripsPhoto"
          />
          <p className="trip-place-planned">{this.props.detail.destinationName}</p>
        </div>
        <button className="delete-trip-btn-planned" onClick={this.deleteTrip} />
      </div>
    );
  }
}

export default connect(
  state => ({ user: state.user }),
  { deleteTrip }
)(PlannedTripDetail);
