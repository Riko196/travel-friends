import React, { Component } from "react";
import { connect } from "react-redux";
import TripDetail from "./TripDetail";
import { getMyTrips } from "../../actions/trips";
import "./TripsList.css";

class TripsList extends Component {
  componentWillMount() {
    if (this.props.myTrips === null) {
      this.props.getMyTrips(this.props.userId);
    }
  }

  render() {
    return (
      <div className="my-trips-list-wrapper">
        <p className="my-trips-name-list">My trips:</p>
        <div className="my-trips-list-container">
          {this.props.myTrips !== null &&
            this.props.myTrips.length !== 0 &&
            this.props.myTrips.map((trip, index) => {
              const identification = { index: index, tripId: trip.tripId };
              return (
                <TripDetail
                  detail={trip}
                  key={index}
                  identification={identification}
                />
              );
            })}
          {this.props.myTrips !== null &&
            (this.props.myTrips.length === 0 && <p>No added trips</p>)}
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    myTrips: state.myTrips,
    userId: state.user.userId
  }),
  { getMyTrips }
)(TripsList);
