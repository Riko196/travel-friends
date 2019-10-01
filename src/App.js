import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { Switch } from "react-router";
import requireAuth from "./components/auth/AuthComponent";
import Navbar from "./components/navbar/Navbar";
import PageNotFound from "./components/helpful/PageNotFound";

import HomeRouter from "./components/home/index";
import DestinationRouter from "./components/destination";
import ProfileRouter from "./components/profile/index";
import AboutUsRouter from "./components/aboutUs/index";
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
        <Route path="/logged-in/:something" component={Navbar} />
        <Switch>
          <Route exact path="/" component={LandingRouter} />
          <Route exact path="/privacy-policy" component={PrivacyPolicyRouter} />
          <Route
            exact
            path="/terms-conditions"
            component={TermsConditionsRouter}
          />
          <Route path="/logged-in/home" component={authenticatedHomeRouter} />
          <Route
            path="/logged-in/destination"
            component={authenticatedDestinationRouter}
          />
          <Route
            path="/logged-in/profile"
            component={authenticatedProfileRouter}
          />
          <Route
            path="/logged-in/about-us"
            component={authenticatedAboutUsRouter}
          />
          <Route
            exact
            path="/logged-in/page-not-found"
            component={authenticatedPageNotFound}
          />
          <Redirect to="/logged-in/page-not-found" />
        </Switch>
      </div>
    );
  }
}

export default App;
