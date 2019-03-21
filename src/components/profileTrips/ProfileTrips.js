import React, { Component } from "react";
import AddTripModal from "../profile/AddTripModal";
import Trip from "../trip/Trip";
import "./ProfileTrips.css";

class ProfileTrips extends Component {

  render() {
    return (
      <div>
        <AddTripModal/>
        <Trip/>
      </div>
    );
  }
}

export default ProfileTrips;
