import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import Select from "react-select";
import { stringDateToISODateString, isNull } from "../../utils/functions";
import { insertTrip, getMyTrips } from "../../actions/trips";
import { getAllDestinationsName } from "../../actions/destinations";
import DatePicker from "react-datepicker";
import { tripModalStyle } from "./AddTripModalStyle";

import "./AddTripModal.css";

Modal.setAppElement(document.getElementById("root"));

class AddTripModal extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      dateFrom: null,
      dateTo: null,
      planned: false
    };

    this.destinationName = React.createRef();
    this.tripInfo = React.createRef();
  }

  componentWillMount() {
    if (this.props.destinationsName.length === 0) {
      this.props.getAllDestinationsName();
    }
  }

  openModal = () => {
    this.setState({
      modalIsOpen: true,
      dateFrom: null,
      dateTo: null,
      planned: false
    });
  };

  closeModal = () => {
    this.setState({
      modalIsOpen: false,
      dateFrom: null,
      dateTo: null,
      planned: false
    });
  };

  inputIsCorrect = () => {
    if (isNull(this.destinationName.current.state)) return false;
    if (this.state.planned === false) {
      if (
        isNull(this.state.dateFrom) ||
        isNull(this.state.dateTo) ||
        this.state.dateFrom > this.state.dateTo
      )
        return false;
    }
    return true;
  };

  addTrip = () => {
    if (this.inputIsCorrect()) {
      const dateFrom =
        this.state.planned === true
          ? null
          : stringDateToISODateString(this.state.dateFrom);
      const dateTo =
        this.state.planned === true
          ? null
          : stringDateToISODateString(this.state.dateTo);

      const newTrip = {
        userId: this.props.userId,
        destinationName: this.destinationName.current.state.value.label,
        planned: this.state.planned,
        dateFrom: dateFrom,
        dateTo: dateTo,
        tripInfo: this.tripInfo.current.value
      };

      this.props.insertTrip(newTrip, this.props.name).then(response => {
        this.closeModal();
      });
    }
  };

  handleChangeDateFrom = date => {
    this.setState({
      dateFrom: date
    });
  };

  handleChangeDateTo = date => {
    this.setState({
      dateTo: date
    });
  };

  handleChangePlanned = event => {
    this.setState({
      planned: event.target.checked
    });
  };

  render() {
    const destinationsName = this.props.destinationsName.map(element => {
      return { value: element.destinationName, label: element.destinationName };
    });

    return (
      <div className="add-trip-modal-container">
        <button className="add-trip" onClick={this.openModal}>
          Add trip
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Add trip"
          style={tripModalStyle}
        >
          <input
            type="button"
            name="exit"
            value="X"
            onClick={this.closeModal}
            className="x-button"
          />
          <h2>Add trip</h2>

          <label className="modal-label">Destination:</label>
          <Select
            options={destinationsName}
            className="text-input"
            id="destination-input"
            placeholder="&nbsp;"
            ref={this.destinationName}
            defaultInputValue={""}
          />

          <label className="modal-label">Planning:</label>
          <input
            type="checkbox"
            onChange={this.handleChangePlanned}
            defaultChecked={false}
          />

          {this.state.planned === false && (
            <div>
              <label className="modal-label">From:</label>
              <DatePicker
                selected={this.state.dateFrom}
                onChange={this.handleChangeDateFrom}
              />

              <label className="modal-label">To:</label>
              <DatePicker
                selected={this.state.dateTo}
                onChange={this.handleChangeDateTo}
              />
            </div>
          )}

          <label className="modal-label">Additional info:</label>
          <textarea type="text" className="textarea" ref={this.tripInfo} />

          <input
            type="button"
            value="Save trip"
            className="save-button"
            onClick={this.addTrip}
          />
        </Modal>
      </div>
    );
  }
}

export default connect(
  state => ({
    userId: state.user.userId,
    name: state.user.name,
    destinationsName: state.destinationsName,
    myTrips: state.myTrips
  }),
  { getAllDestinationsName, insertTrip, getMyTrips }
)(AddTripModal);
