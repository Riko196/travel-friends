import React, { Component } from "react";

import "./AboutUs.css";

class AboutUs extends Component {
  render() {
    return (
      <div>
        <div className="background-image">
          <img src={require("../../images/about-us.jpg")} alt={"About us"} />
          <div className="about-us-container">
            <p className="about-us-p">
              Who are we? We are eager travelers who love meeting new people! We
              are trying to put together people with the same passion and also -
              same destination! From our own experience, we do not want to pay
              huge amount of money for the service that should help people in
              their passion. That's why this service is completely free of
              charge. This way you are able to save money for future trips. Why
              should you use this platform?
            </p>
            <p className="about-us-p">
              Firstly, you can find travel friends with same destination and
              share the costs with them (accomodation, food, car rental etc.).
              <br />
              Secondly, you are not traveling alone. You have a mate(s) you can
              count on. With your travelfriends you can share your experience
              together - more people, more fun. The fact is you know at least 2
              cultures during your trip. (?) One culture at your destination and
              also culture of your new travelfriend.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
