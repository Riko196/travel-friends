import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import Destination from "../destination/Destination";
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
            <button id="findthem">Find them!</button>
          </div>
        </div>
        <p>TODO</p>
      </div>
    );
  }
}

export default Home;
