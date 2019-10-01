import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Profile from "./Profile";

class ProfileRouter extends Component {
  render() {
    return (
      <div className="profile-router-container">
        <Switch>
          <Route exact path="/logged-in/profile" component={Profile} />
          <Redirect to="/logged-in/page-not-found" />
        </Switch>
      </div>
    );
  }
}

export default ProfileRouter;
