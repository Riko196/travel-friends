import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./Home";
import MyFriendsList from "./MyFriendsList";
import MyFriendsProfile from "./MyFriendsProfile";
class HomeRouter extends Component {
  render() {
    return (
      <div className="home-router-container">
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route
            exact
            path="/home/my-friends/:destinationName/:dateFrom/:dateTo/:gender"
            component={MyFriendsList}
          />
          <Route
            exact
            path="/home/my-friends/profile/:userId"
            component={MyFriendsProfile}
          />
          <Redirect to="/page-not-found" />
        </Switch>
      </div>
    );
  }
}

export default HomeRouter;
