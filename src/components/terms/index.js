import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import TermsConditions from "./TermsConditions";

class TermsConditionsRouter extends Component {
  render() {
    return (
      <div className="terms-and-conditions-router-container">
        <Switch>
          <Route exact path="/terms-conditions" component={TermsConditions} />
          <Redirect to="/page-not-found" />
        </Switch>
      </div>
    );
  }
}

export default TermsConditionsRouter;
