import React, { Component } from "react";
import Select from "react-select";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";

import "./DestinationSearch.css";

class DestinationSearch extends Component {
  constructor(props) {
    super(props);
    this.destinationName = React.createRef();
  }

  getDestination = () => {
    if (this.destinationName.current.state.value !== null)
      this.props.history.push(
        `/destination/${this.destinationName.current.state.value.value}`
      );
  };

  render() {
    const destinationsName =
      this.props.destinationsName === null
        ? []
        : this.props.destinationsName.map(element => {
            return {
              value: element.destinationId,
              label: element.destinationName
            };
          });

    return (
      <div className="destination-search">
        {/*<p className="destination-text">Destination search:</p>*/}
        <Select
          options={destinationsName}
          ref={this.destinationName}
          defaultInputValue={""}
          placeholder="Destination..."
        />

        <input
          type="button"
          value="Search destinations!"
          className="search-destination-button"
          onClick={this.getDestination}
        />
      </div>
    );
  }
}

export default compose(
  withRouter,
  connect(
    state => ({
      destinationsName: state.destinationsName
    }),
    {}
  )
)(DestinationSearch);
