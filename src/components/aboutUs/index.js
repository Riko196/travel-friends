import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AboutUs from "./AboutUs";

class AboutUsRouter extends Component {
  render() {
    return (
      <div className="aboutus-router-container">
        <Switch>
          <Route exact path="/logged-in/about-us" component={AboutUs} />
          <Redirect to="/logged-in/page-not-found" />
        </Switch>
      </div>
    );
  }
}

export default AboutUsRouter;
