import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";

export default AuthenticatedComponent => {
  class AuthComponent extends React.Component {
    render() {
      return this.props.loggedIn ? (
        <AuthenticatedComponent {...this.props} />
      ) : (
        <Redirect to="/" />
      );
    }
  }

  return compose(
    withRouter,
    connect(
      state => ({
        loggedIn: state.loggedIn
      }),
      {}
    )
  )(AuthComponent);
};
