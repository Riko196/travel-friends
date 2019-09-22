import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./BottomBar.css";

class BottomBar extends Component {
  render() {
    return (
      <div className="bottom-bar">
        <div className="divider" id="divider-bottom" />
        <div className="bottom-links">
          <div className="follow-us">
            <i className="fab fa-facebook-f mx-1 facebook-icon" />
            <i className="fab fa-instagram mx-1 instagram" />
            <i className="fab fa-youtube mx-1 youtube" />
          </div>
        </div>
      </div>
    );
  }
}

export default BottomBar;
