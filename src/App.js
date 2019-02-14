import React, { Component } from "react";
import LandingPage from "./components/landing/LandingPage";
import TermsConditions from "./components/terms/TermsConditions";
import PrivacyPolicy from "./components/privacy/PrivacyPolicy";
import Profile from "./components/profile/Profile";
import { Route } from "react-router-dom";
import { Switch } from "react-router";
import EditProfile from "./components/editProfile/EditProfile";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="application-container">
        <Route path="/:something" component={Navbar} />
        <Route exact path="/" component={LandingPage} />
        <Switch>
          <Route path="/terms-conditions" component={TermsConditions} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/profile" component={Profile} />
          <Route path="/home" component={Home} />
          <Route path="/edit-profile" component={EditProfile} />
        </Switch>
      </div>
    );
  }
}

export default App;
