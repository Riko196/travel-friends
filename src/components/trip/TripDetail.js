import React, { Component } from "react";
import { connect } from "react-redux";
import { ISODateTostringDate } from "../../utils/functions";
import { deleteTrip } from "../../actions/trips";
import "./TripDetail.css";

class TripDetail extends Component {
  deleteTrip = e => {
    this.props.deleteTrip(
      this.props.identification.index,
      this.props.identification.tripId
    );
  };

  render() {
    const dateFrom = ISODateTostringDate(this.props.detail.dateFrom);
    const dateTo = ISODateTostringDate(this.props.detail.dateTo);
    console.log("TripDetail ", this.props);
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
          <p className="trip-place">{this.props.detail.destinationName}</p>
        </div>
        <div className="half-2">
          <p className="trip-date">from: {dateFrom}</p>
          <p className="trip-date">to: {dateTo}</p>
        </div>
        <button className="delete-trip-btn" onClick={this.deleteTrip} />
      </div>
    );
  }
}

export default connect(
  state => ({}),
  { deleteTrip }
)(TripDetail);
