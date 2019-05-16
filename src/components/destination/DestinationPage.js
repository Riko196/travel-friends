import React, { Component } from "react";
import { connect } from "react-redux";
import "./DestinationPage.css";

class DestinationPage extends Component {

  render() {
    console.log(this.props.selectedDestination);

    return (
    <div className="destination-wrapper">
      <div className="destination-upper-div">
        <img className="destinationPagePhoto" 
        src={require(`../../images/cityPhotos/${this.props.selectedDestination.destinationPhoto}`)}>
        </img>
        <p className="destination-page-title">{this.props.selectedDestination.destinationName}</p>
      </div>
      <div className="reviews">
        <p>Reviews</p>
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