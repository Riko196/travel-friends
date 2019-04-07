import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../navbar/Navbar";
import FindThemModal from "./FindThemModal";
import "./Home.css";

class Home extends Component {
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
          </div>
        </div>
        <p>TODO</p>
      </div>
    );
  }
}

export default connect(
  state => ({
    myFriends: state.myFriends
  }),
  {}
)(Home);
