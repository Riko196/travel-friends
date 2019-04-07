import React, { Component } from "react";
import "./Trip.css";

class Trip extends Component {
  render() {
    return (
      <div className="trip-div">
        <div className="half">
          <img className="flag" alt="Trip" />
          <p className="trip-place">New York, USA</p>
        </div>
        <div className="half-2">
          <p className="trip-date">from: 22.04.2019</p>
          <p className="trip-date">to: 27.04.2019</p>
        </div>
        <button className="delete-trip-btn" />
      </div>
    );
  }
}

export default Trip;
