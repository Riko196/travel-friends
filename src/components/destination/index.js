import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import DestinationPage from "./DestinationPage"

class DestinationRouter extends Component {
  render() {
    return (
      <div className="destination-router-container">
        <Switch>
          <Route exact path="/destination" component={DestinationPage} />
        </Switch>
      </div>
    );
  }
}

export default DestinationRouter;
