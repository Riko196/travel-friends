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
          <NavLink to="/home" className="navbar-link">
            Home
          </NavLink>
        </div>
        <div className="navbar-item">
          <NavLink to="/profile" className="navbar-link">
            Profile
          </NavLink>
        </div>
        <div className="navbar-item">
          <NavLink to="/about" className="navbar-link">
            About
          </NavLink>
        </div>
        <div className="navbar-item">
          <button onClick={this.props.logOut} className="navbar-link">
            Log Out
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { logOut }
)(Navbar);
