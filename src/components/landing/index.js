import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import LandingPage from "./LandingPage";

class LandingRouter extends Component {
  render() {
    return (
      <div className="landing-router-container">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Redirect to="/logged-in/page-not-found" />
        </Switch>
      </div>
    );
  }
}

export default LandingRouter;
