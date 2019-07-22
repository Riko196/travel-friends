import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../navbar/Navbar";
import { compose } from "redux";
import FindThemModal from "./FindThemModal";
import DestinationSearch from "../destination/DestinationSearch";
import { withRouter, Link } from "react-router-dom";
import { getTheMostPopularDestinations } from "../../actions/destinations";
import Destination from "../destination/Destination";
import { countOfTheMostPopularDestinations } from "../../utils/constants";
import Loading from "../helpful/Loading";

import "./Home.css";

class Home extends Component {
  componentDidMount() {
    if (this.props.theMostPopularDestinations === null) {
      this.props.getTheMostPopularDestinations(
        countOfTheMostPopularDestinations
      );
    }
  }

  render() {
    const { theMostPopularDestinations } = this.props;
    if (theMostPopularDestinations === null) {
      return <Loading />;
    }

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
            <DestinationSearch />
          </div>
        </div>
        <p className="most-popular-p">Most popular destinations</p>
        <div className="home-part-popular">
          {theMostPopularDestinations !== null &&
            theMostPopularDestinations.map(destination => (
              <Link
                to={`/destination/${destination.destinationId}`}
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
      theMostPopularDestinations: state.theMostPopularDestinations
    }),
    { getTheMostPopularDestinations }
  )
)(Home);
