import React, { Component } from "react";
import "./PrivacyPolicy.css";
class PrivacyPolicy extends Component {

  componentDidMount() {
    var elements = document.getElementsByClassName("navbar-item");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.setProperty('background-color', "royalblue", 'important');
    };
  }

  render() {
    return (
      <div>
      <div className="background-image-privacy"></div>
      <div className="privacy-container">
        <p className="privacy-p">
          PRIVACY POLICY
        </p>
      </div>
      </div>
    );
  }
}

export default PrivacyPolicy;
