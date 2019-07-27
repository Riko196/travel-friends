import React, { Component } from "react";
import { connect } from "react-redux";
import TripDetail from "./TripDetail";
import { getMyTrips } from "../../actions/trips";
import { getCurrentDate, ISODateStringToISODate } from "../../utils/functions";
import PlannedTripDetail from "./PlannedTripDetail";
import Loading from "../helpful/Loading";

import "./TripsList.css";

class TripsList extends Component {
  componentDidMount() {
    if (this.props.myTrips === null) {
      this.props.getMyTrips(this.props.userId);
    }
  }

  render() {
    const myTrips = this.props.myTrips;
    console.log(myTrips);
    if (myTrips === null) {
      return <Loading />;
    }

    let oldTrips = [];
    let newTrips = [];
    let plannedTrips = [];
    const currentDate = getCurrentDate();

    for (const trip of myTrips) {
      if (trip.planned === true) {
        plannedTrips.push(trip);
        continue;
      }
      const dateTo = ISODateStringToISODate(trip.dateTo);
      if (currentDate > dateTo) {
        oldTrips.push(trip);
      } else {
        newTrips.push(trip);
      }
    }

    return (
      <div className="my-trips-list-wrapper">
        <p className="my-trips-name-list">New trips:</p>
        <div className="my-trips-list-container">
          {newTrips.length !== 0 &&
            newTrips.map((trip, key) => {
              return <TripDetail detail={trip} key={key} planned={true} />;
            })}
          {newTrips.length === 0 && (
            <p className="no-planned-trips">No new trips</p>
          )}
        </div>
        <p className="my-trips-name-list">Planned trips:</p>
        <div className="my-trips-list-container">
          {plannedTrips.length !== 0 &&
            plannedTrips.map((trip, key) => {
              return <PlannedTripDetail detail={trip} key={key} />;
            })}
          {plannedTrips.length === 0 && (
            <p className="no-old-trips">No planned trips</p>
          )}
        </div>
        <p className="my-trips-name-list">Old trips:</p>
        <div className="my-trips-list-container">
          {oldTrips.length !== 0 &&
            oldTrips.map((trip, key) => {
              return <TripDetail detail={trip} key={key} planned={false} />;
            })}
          {oldTrips.length === 0 && (
            <p className="no-old-trips">No old trips</p>
          )}
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
