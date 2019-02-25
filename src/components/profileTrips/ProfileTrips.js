import React, { Component } from "react";
import AddTripModal from "../profile/AddTripModal";
import "./ProfileTrips.css";

class ProfileTrips extends Component {

  render() {
    return (
      <div>
        <AddTripModal/>
      </div>
    );
  }
}

export default ProfileTrips;
