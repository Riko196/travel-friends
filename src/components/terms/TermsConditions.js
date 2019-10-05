import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./TermsConditions.css";

class TermsConditions extends Component {
  render() {
    return (
      <div>
        <div className="background-image-terms">
          <img
            src={require("../../images/terms.jpg")}
            alt={"Terms & Conditions"}
          />
          <NavLink to="/" className="back-link">
            Back
          </NavLink>
          <div className="terms-container">
            <p className="terms-p">TERMS {"&"} CONDITIONS</p>
          </div>
        </div>
      </div>
    );
  }
}

export default TermsConditions;
