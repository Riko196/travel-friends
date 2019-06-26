import React, { Component } from "react";
import { connect } from "react-redux";
import TripDetail from "./TripDetail";
import { getMyTrips } from "../../actions/trips";
import { getCurrentDate, ISODateStringToISODate } from "../../utils/functions";

import "./TripsList.css";

class TripsList extends Component {
  componentWillMount() {
    if (this.props.myTrips === null) {
      this.props.getMyTrips(this.props.userId);
    }
  }

  render() {
    let oldTrips = [];
    let plannedTrips = [];
    const currentDate = getCurrentDate();

    if (this.props.myTrips !== null) {
      for (let trip of this.props.myTrips) {
        const dateTo = ISODateStringToISODate(trip.dateTo);
        if (currentDate > dateTo) {
          oldTrips.push(trip);
        } else {
          plannedTrips.push(trip);
        }
      }
    }

    return (
      <div className="my-trips-list-wrapper">
        <p className="my-trips-name-list">Old trips:</p>
        <div className="my-trips-list-container">
          {oldTrips.length !== 0 &&
            oldTrips.map((trip, index) => {
              return <TripDetail detail={trip} key={index} planned={false} />;
            })}
          {oldTrips.length === 0 && <p className="no-old-trips">No old trips</p>}
        </div>
        <p className="my-trips-name-list">Planned trips:</p>
        <div className="my-trips-list-container">
          {plannedTrips.length !== 0 &&
            plannedTrips.map((trip, index) => {
              return <TripDetail detail={trip} key={index} planned={true} />;
            })}
          {plannedTrips.length === 0 && <p className="no-planned-trips">No planned trips</p>}
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
