import React, { Component } from "react";
import LandingPage from "./components/landing/LandingPage";
import TermsConditions from "./components/terms/TermsConditions";
import PrivacyPolicy from "./components/privacy/PrivacyPolicy";
import Profile from "./components/profile/Profile";
import HomeRouter from "./components/home/index";
import { Route } from "react-router-dom";
import { Switch } from "react-router";
import requireAuth from "./components/auth/AuthComponent";
import Navbar from "./components/navbar/Navbar";
import DestinationRouter from "./components/destination";
import PageNotFound from "./components/helpful/PageNotFound";
import "./App.css";

const authenticatedProfile = requireAuth(Profile);
const authenticatedHomeRouter = requireAuth(HomeRouter);
const authenticatedDestinationRouter = requireAuth(DestinationRouter);
class App extends Component {
  render() {
    return (
      <div className="application-container">
        <Route path="/:something" component={Navbar} />
        <Route exact path="/" component={LandingPage} />
        <Switch>
          <Route path="/home" component={authenticatedHomeRouter} />
          <Route
            path="/destination"
            component={authenticatedDestinationRouter}
          />
          <Route path="/profile" component={authenticatedProfile} />
          <Route path="/terms-conditions" component={TermsConditions} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route exact path="/page-not-found" component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
