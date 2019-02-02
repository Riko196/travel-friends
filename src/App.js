import React, { Component } from "react";
import LandingPage from "./components/landing/LandingPage";
import { Route } from "react-router-dom";
import { Switch } from "react-router";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="application-container">
        <Route exact path="/" component={LandingPage} />
        <Switch />
      </div>
    );
  }
}

export default App;
