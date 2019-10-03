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
import AddTripModal from "../profile/AddTripModal";
import BottomBar from "../bottombar/BottomBar";
import CookieConsent from "react-cookie-consent";

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
    const { theMostPopularDestinations, firstLogin } = this.props;
    if (theMostPopularDestinations === null) {
      return <Loading />;
    }

    return (
      <div className="home">
        <div className="home_part-1">
          <Navbar />
          {firstLogin && (
            <CookieConsent
              location="bottom"
              buttonText="Sure man!!"
              cookieName="myAwesomeCookieName2"
              style={{ background: "#2B373B" }}
              buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
              expires={150}
            >
              This website uses cookies to enhance the user experience.{" "}
              <span style={{ fontSize: "10px" }}>
                This bit of text is smaller :O
              </span>
            </CookieConsent>
          )}

          <div className="home-center">
            <p id="its-time">It is time to pack and go! :{")"}</p>
            <p id="travel-friends-home">
              Your travel friends are waiting for you!
            </p>
            <div className="home-buttons">
              <FindThemModal />
              <AddTripModal />
            </div>
          </div>
        </div>
        <p className="most-popular-p">Most popular destinations</p>
        <p className="most-popular-p-under">
          Most travelers want to visit these destinations
        </p>
        <div className="divider"></div>
        <div className="home-part-popular">
          {theMostPopularDestinations !== null &&
            theMostPopularDestinations.map(destination => (
              <Link
                to={`/logged-in/destination/${destination.destinationId}`}
                key={destination.destinationId}
              >
                <Destination destination={destination} />
              </Link>
            ))}
        </div>
        <DestinationSearch />
        <BottomBar />
      </div>
    );
  }
}

export default compose(
  withRouter,
  connect(
    state => ({
      theMostPopularDestinations: state.theMostPopularDestinations,
      firstLogin: state.user.firstLogin
    }),
    { getTheMostPopularDestinations }
  )
)(Home);
