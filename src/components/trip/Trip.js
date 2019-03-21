import React, { Component } from "react";
import "./Trip.css";

class Trip extends Component {

  render() {
    return (
      <div class="trip-div">
        <div class="half">
            <img class="flag"></img>
            <p class="trip-place">New York, USA</p>
        </div>
        <div class="half-2">
            <p class="trip-date">from: 22.04.2019</p>
            <p class="trip-date">to: 27.04.2019</p>
        </div>
        <button class="delete-trip-btn"></button>
      </div>
    );
  }
}

export default Trip;