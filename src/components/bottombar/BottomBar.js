import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./BottomBar.css";

class BottomBar extends Component {
  render() {
    return (
      <div className="bottom-bar">
        <div className="divider" id="divider-bottom">
        </div>
        <div className="bottom-links">
            <div className="follow-us">Follow us:
                <a className="bottom-fb-link" alt="facebook link" href="#">
                    <i className="fab fa-facebook-f mx-1" />
                </a>
                <a className="bottom-ig-link" alt="instagram link" href="#">
                    <i className="fab fa-instagram mx-1" />
                </a>
                <a className="bottom-yt-link" alt="youtube link" href="#">
                    <i className="fab fa-youtube mx-1" />
                </a>
            </div>
            <NavLink to="/terms-conditions" className="terms-cond">Terms {"&"} conditions</NavLink>
            <NavLink to="/privacy-policy" className="privacy-policy-bar">Privacy policy</NavLink>
        </div>
      </div>
    );
  }
}

export default BottomBar;