import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import DestinationPage from "./DestinationPage";
class DestinationRouter extends Component {
  render() {
    return (
      <div className="destination-router-container">
        <Switch>
          <Route
            exact
            path="/logged-in/destination/:destinationId"
            component={DestinationPage}
          />
          <Redirect to="/logged-in/page-not-found" />
        </Switch>
      </div>
    );
  }
}

export default DestinationRouter;
