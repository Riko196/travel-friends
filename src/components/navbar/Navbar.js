import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "../../actions/auth";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-item">
          <NavLink to="/logged-in/home" className="navbar-link">
            Home
          </NavLink>
        </div>
        <div className="navbar-item">
          <NavLink to="/logged-in/profile" className="navbar-link">
            Profile
          </NavLink>
        </div>
        <div className="navbar-item">
          <NavLink to="/logged-in/about-us" className="navbar-link">
            About
          </NavLink>
        </div>
        <div className="navbar-item">
          <button onClick={this.props.logOut} className="navbar-link">
            Log Out
          </button>
        </div>
        <div className="sandwitch">
          &#9776;
          <div className="navbar-item-drop">
            <NavLink
              to="/logged-in/home"
              className="navbar-link large-text-link"
            >
              Home
            </NavLink>
          </div>
          <div className="navbar-item-drop">
            <NavLink
              to="/logged-in/profile"
              className="navbar-link large-text-link"
            >
              Profile
            </NavLink>
          </div>
          <div className="navbar-item-drop">
            <NavLink
              to="/logged-in/about-us"
              className="navbar-link large-text-link"
            >
              About
            </NavLink>
          </div>
          <div className="navbar-item-drop">
            <button
              onClick={this.props.logOut}
              className="navbar-link large-text-link"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { logOut }
)(Navbar);
