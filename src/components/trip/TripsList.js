import React, { Component } from "react";
import { connect } from "react-redux";
import TripDetail from "./TripDetail";
import { getMyTrips } from "../../actions/trips";
import { getCurrentDate, ISODateStringToISODate } from "../../utils/functions";
import PlanningTripDetail from "./PlanningTripDetail";
import Loading from "../helpful/Loading";
import cookie from "react-cookies";

import "./TripsList.css";

class TripsList extends Component {
  componentDidMount() {
    if (this.props.myTrips === null) {
      const userId = cookie.load("userId");
      this.props.getMyTrips(userId);
    }
  }

  render() {
    const myTrips = this.props.myTrips;

    if (myTrips === null) {
      return <Loading />;
    }

    let oldTrips = [];
    let newTrips = [];
    let planningTrips = [];
    const currentDate = getCurrentDate();

    for (const trip of myTrips) {
      if (trip.planned === false) {
        planningTrips.push(trip);
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
        <p className="my-trips-name-list">Following trips:</p>
        <div className="my-trips-list-container">
          {newTrips.length !== 0 &&
            newTrips.map((trip, key) => {
              return <TripDetail detail={trip} key={key} type={"new"} />;
            })}
          {newTrips.length === 0 && (
            <p className="no-planned-trips">No following trips</p>
          )}
        </div>
        <p className="my-trips-name-list">Planning trips:</p>
        <div className="my-trips-list-container">
          {planningTrips.length !== 0 &&
            planningTrips.map((trip, key) => {
              return <PlanningTripDetail detail={trip} key={key} type={"planning"}/>;
            })}
          {planningTrips.length === 0 && (
            <p className="no-old-trips">No planning trips</p>
          )}
        </div>
        <p className="my-trips-name-list">Old trips:</p>
        <div className="my-trips-list-container">
          {oldTrips.length !== 0 &&
            oldTrips.map((trip, key) => {
              return <TripDetail detail={trip} key={key} type={"old"} />;
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
    myTrips: state.myTrips
  }),
  { getMyTrips }
)(TripsList);
