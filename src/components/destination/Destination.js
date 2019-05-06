import React, { Component } from "react";
import "./Destination.css";

class Destination extends Component {

  render() {
    console.log(this.props.destination);
    return (
      <div className="destination">
        <img className="destination-image" 
            src={require(`../../images/cityPhotos/${this.props.destination.destinationPhoto}`)}
              alt=""></img>
        <p className="destination-name">{this.props.destination.destinationName}</p>
      </div>
    );
  }
}

export default Destination;