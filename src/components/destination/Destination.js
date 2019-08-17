import React, { Component } from "react";

import "./Destination.css";

class Destination extends Component {
  render() {
    let destinationPhotoUrl = null;
    try {
      destinationPhotoUrl = require(`../../images/cityPhotos/${
        this.props.destination.destinationPhoto
      }`);
    } catch (err) {
      destinationPhotoUrl = null;
    }

    return (
      <div className="destination">
        {destinationPhotoUrl !== null && (
          <img className="destination-image" src={destinationPhotoUrl} alt="" />
        )}
        <p className="destination-name">
          {this.props.destination.destinationName}
        </p>
      </div>
    );
  }
}

export default Destination;
