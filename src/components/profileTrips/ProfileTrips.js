import React, { Component } from "react";
import "./ProfileTrips.css";

class ProfileTrips extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label className="destination">
            Destination:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label className="date">
            from:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label className="date">
            to:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label className="trip-info">
            Additional info:
            <textarea type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
}

export default ProfileTrips;