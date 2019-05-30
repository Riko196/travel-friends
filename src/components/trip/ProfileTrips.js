import React, { Component } from "react";
import AddTripModal from "../profile/AddTripModal";
import TripsList from "./TripsList";
import "./ProfileTrips.css";

class ProfileTrips extends Component {
  render() {
    return (
      <div>
        <AddTripModal />
        <TripsList />
      </div>
    );
  }
}

export default ProfileTrips;
