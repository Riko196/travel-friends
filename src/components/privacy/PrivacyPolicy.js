import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./PrivacyPolicy.css";
class PrivacyPolicy extends Component {
  render() {
    return (
      <div>
        <div className="background-image-privacy">
          <img
            src={require("../../images/privacy_background.jpg")}
            alt={"Privacy Policy"}
          />
          <NavLink to="/" className="back-link">
            Back
          </NavLink>
          <div className="privacy-container">
            <p className="privacy-p">PRIVACY POLICY</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PrivacyPolicy;
