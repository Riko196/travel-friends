import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-item">
            <NavLink to="/home" className="navbar-link">Home</NavLink>
        </div>
        <div className="navbar-item">
            <NavLink to="/profile" className="navbar-link">Profile</NavLink>
        </div>
        <div className="navbar-item">
            <NavLink to="/about" className="navbar-link">About</NavLink>
        </div>
      </div>
    );
  }
}

export default Navbar;