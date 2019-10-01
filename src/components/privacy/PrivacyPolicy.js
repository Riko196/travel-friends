import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./PrivacyPolicy.css";
class PrivacyPolicy extends Component {
  render() {
    return (
      <div>
        <div className="background-image-privacy">
          <NavLink to="/" className="navbar-link large-text-link">
            Landing page
          </NavLink>
          <img
            src={require("../../images/privacy_background.jpg")}
            alt={"Privacy Policy"}
          />
          <div className="privacy-container">
            <p className="privacy-p">PRIVACY POLICY</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PrivacyPolicy;
