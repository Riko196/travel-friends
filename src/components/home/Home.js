import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../navbar/Navbar";
import { compose } from "redux";
import FindThemModal from "./FindThemModal";
import { withRouter, Link } from "react-router-dom";
import { getMostPopularDestinations, setSelectedDestination } from "../../actions/destinations";
import Destination from "../destination/Destination";
import Messenger from "../messenger/Messenger";
import "./Home.css";

class Home extends Component {
  handleChooseDestination = destination => {
    this.props.setSelectedDestination(destination);
  };

  componentWillMount() {
    if (this.props.destinations === null) {
      this.props.getMostPopularDestinations(10);
    }
  }

  render() {
    return (
      <div className="home">
        <div className="home_part-1">
          <Navbar />
          <div className="home-center">
            <p id="its-time">It is time to pack and go! :{")"}</p>
            <p id="travel-friends-home">
              Your travel friends are waiting for you!
            </p>
            <FindThemModal />
            <Messenger />
          </div>
        </div>
        <p className="most-popular-p">Most popular destinations</p>
        <div className="home-part-popular">
          {this.props.destinations !== null &&
            this.props.destinations.map(destination => (
              <Link
                to={"/destination"}
                onClick={e => this.handleChooseDestination(destination)}
                key={destination.destinationId}
              >
                <Destination destination={destination} />
              </Link>
            ))}
        </div>
      </div>
    );
  }
}

export default compose(
  withRouter,
  connect(
    state => ({
      myFriends: state.myFriends,
      destinations: state.destinations
    }),
    { getMostPopularDestinations, setSelectedDestination }
  )
)(Home);
