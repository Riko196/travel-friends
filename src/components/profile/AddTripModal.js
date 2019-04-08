import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import Select from "react-select";
import {
  removeAllSpaces,
  stringDateToISODate,
  isNull
} from "../../utils/functions";
import { insertTrip } from "../../actions/trip";
import DatePicker from "react-datepicker";
import { tripModalStyle } from "./AddTripModalStyle";
import { category } from "../../utils/constants";
import "./AddTripModal.css";

Modal.setAppElement(document.getElementById("root"));

class AddTripModal extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      dateFrom: null,
      dateTo: null
    };

    this.destinationName = React.createRef();
    this.planned = React.createRef();
    this.tripInfo = React.createRef();
    this.category = React.createRef();
  }

  openModal = () => {
    this.setState({ modalIsOpen: true, dateFrom: null, dateTo: null });
  };

  closeModal = () => {
    this.setState({
      modalIsOpen: false,
      dateFrom: null,
      dateTo: null
    });
  };

  inputIsCorrect = () => {
    if (
      isNull(this.state.dateFrom) ||
      isNull(this.state.dateTo) ||
      isNull(this.destinationName.current.value) ||
      isNull(this.gender.current.state) ||
      stringDateToISODate(this.state.dateFrom) >
        stringDateToISODate(this.state.dateTo)
    )
      return false;
    return true;
  };

  addTrip = () => {
    if (this.inputIsCorrect()) {
      insertTrip({
        userId: this.props.userId,
        destinationName: this.destinationName.current.value,
        planned: this.planned.current.value.label,
        category: this.category.current.state.value.label,
        dateFrom: stringDateToISODate(this.state.dateFrom),
        dateTo: stringDateToISODate(this.state.dateTo),
        tripInfo: this.tripInfo.current.value
      }).then(() => {
        this.closeModal();
      });
    }
  };

  getInputFinalValue = inputValue => {
    return removeAllSpaces(inputValue) === "" ? null : inputValue;
  };

  getSelectFinalValue = selectValue => {
    return selectValue === null ? null : selectValue.label;
  };

  handleChangeDateFrom = date => {
    console.log(date);
    this.setState({
      dateFrom: date
    });
  };

  handleChangeDateTo = date => {
    this.setState({
      dateTo: date
    });
  };

  render() {
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
          <input
            type="text"
            className="text-input"
            id="destination-input"
            placeholder="&nbsp;"
            ref={this.destinationName}
          />

          <label className="modal-label">Planning:</label>
          <input type="checkbox" ref={this.planned} />

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

          <label className="modal-label">Additional info:</label>
          <textarea type="text" className="textarea" ref={this.tripInfo} />
          <label className="modal-label">Category:</label>
          <Select
            options={category}
            ref={this.category}
            defaultInputValue={""}
          />

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
    userId: state.user.userId
  }),
  {}
)(AddTripModal);
