import React, { Component } from "react";
import ProfileRouter from "./components/profile/index";
import HomeRouter from "./components/home/index";
import LandingRouter from "./components/landing/index";
import { Route, Redirect } from "react-router-dom";
import { Switch } from "react-router";
import requireAuth from "./components/auth/AuthComponent";
import Navbar from "./components/navbar/Navbar";
import DestinationRouter from "./components/destination";
import PageNotFound from "./components/helpful/PageNotFound";
import "./App.css";

const authenticatedHomeRouter = requireAuth(HomeRouter);
const authenticatedDestinationRouter = requireAuth(DestinationRouter);
const authenticatedProfileRouter = requireAuth(ProfileRouter);
const authenticatedPageNotFound = requireAuth(PageNotFound);

class App extends Component {
  render() {
    return (
      <div className="application-container">
        <Route path="/:something" component={Navbar} />
        <Switch>
          <Route exact path="/" component={LandingRouter} />
          <Route path="/home" component={authenticatedHomeRouter} />
          <Route
            path="/destination"
            component={authenticatedDestinationRouter}
          />
          <Route path="/profile" component={authenticatedProfileRouter} />
          <Route path="/about" component={authenticatedProfileRouter} />
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
