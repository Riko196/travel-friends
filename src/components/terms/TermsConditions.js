import React, { Component } from "react";
import "./TermsConditions.css";

class TermsConditions extends Component {

  componentDidMount() {
    var elements = document.getElementsByClassName("navbar-item");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.setProperty('background-color', "royalblue", 'important');
    };
  }

  render() {
    return (
      <div>
      <div className="background-image-terms">
        <img></img>
      <div className="terms-container">
        <p className="terms-p">
          TERMS {"&"} CONDITIONS
        </p>
      </div>
      </div>
      </div>
    );
  }
}

export default TermsConditions;
