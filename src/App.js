import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { Switch } from "react-router";
import requireAuth from "./components/auth/AuthComponent";
import Navbar from "./components/navbar/Navbar";
import PageNotFound from "./components/helpful/PageNotFound";

import HomeRouter from "./components/home/index";
import DestinationRouter from "./components/destination";
import ProfileRouter from "./components/profile/index";
import AboutUsRouter from "./components/about/index";
import LandingRouter from "./components/landing/index";
import TermsConditionsRouter from "./components/terms/index";
import PrivacyPolicyRouter from "./components/privacy/index";

import "./App.css";

const authenticatedHomeRouter = requireAuth(HomeRouter);
const authenticatedDestinationRouter = requireAuth(DestinationRouter);
const authenticatedProfileRouter = requireAuth(ProfileRouter);
const authenticatedAboutUsRouter = requireAuth(AboutUsRouter);
const authenticatedPageNotFound = requireAuth(PageNotFound);

class App extends Component {
  render() {
    return (
      <div className="application-container">
        <Route path="/:something" component={Navbar} />
        <Switch>
          <Route exact path="/" component={LandingRouter} />
          <Route
            exact
            path="/terms-conditions"
            component={TermsConditionsRouter}
          />
          <Route exact path="/privacy-policy" component={PrivacyPolicyRouter} />
          <Route path="/home" component={authenticatedHomeRouter} />
          <Route
            path="/destination"
            component={authenticatedDestinationRouter}
          />
          <Route path="/profile" component={authenticatedProfileRouter} />
          <Route path="/about-us" component={authenticatedAboutUsRouter} />
          <Route
            exact
            path="/page-not-found"
            component={authenticatedPageNotFound}
          />
          <Redirect to="/page-not-found" />
        </Switch>
      </div>
    );
  }
}

export default App;
