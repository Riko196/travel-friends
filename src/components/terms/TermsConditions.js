import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./TermsConditions.css";

class TermsConditions extends Component {
  render() {
    return (
      <div>
        <div className="background-image-terms">
          <NavLink to="/" className="navbar-link large-text-link">
            Landing page
          </NavLink>
          <img
            src={require("../../images/terms.jpg")}
            alt={"Terms & Conditions"}
          />
          <div className="terms-container">
            <p className="terms-p">TERMS {"&"} CONDITIONS</p>
          </div>
        </div>
      </div>
    );
  }
}

export default TermsConditions;
