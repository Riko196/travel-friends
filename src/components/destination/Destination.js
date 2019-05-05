import React, { Component } from "react";
import "./Destination.css";

class Destination extends Component {
  
  getComponent = async destinationPhoto => {
    console.log(destinationPhoto);
    const {default: module} = await import(`../../images/cityPhotos/${destinationPhoto}`);
    console.log(module);
    return module;
  }

  render() {
    console.log(this.props.destination);
    return (
      <div className="destination">
        <img className="destination-image" 
            //  src={this.getComponent(this.props.destination.destinationPhoto)}
            src={require(`../../images/cityPhotos/${this.props.destination.destinationPhoto}`)}
              alt=""></img>
        <p className="destination-name">{this.props.destination.destinationName}</p>
      </div>
    );
  }
}

export default Destination;