import React, { Component } from "react";
import LandingPage from "./components/landing/LandingPage";
import TermsConditions from "./components/terms/TermsConditions"
import PrivacyPolicy from "./components/privacy/PrivacyPolicy"
import { Route } from "react-router-dom";
import { Switch } from "react-router";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="application-container">
        <Route exact path="/" component={LandingPage} />
        <Switch>
          <Route path="/terms-conditions" component={TermsConditions} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
        </Switch>
      </div>
    );
  }
}

export default App;
