import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PrivacyPolicy from "./PrivacyPolicy";

class PrivacyPolicyRouter extends Component {
  render() {
    return (
      <div className="privacy-policy-router-container">
        <Switch>
          <Route exact path="/privacy-policy" component={PrivacyPolicy} />
          <Redirect to="/logged-in/page-not-found" />
        </Switch>
      </div>
    );
  }
}

export default PrivacyPolicyRouter;
