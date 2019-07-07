import React, { Component } from "react";
import "./PageNotFound.css"

class PageNotFound extends Component {
  render() {
    return (
      <div className="page-not-found">
        <p className="error">Page not found! There's a chance it was deleted or moved.</p>
      </div>
    );
  }
}

export default PageNotFound;
