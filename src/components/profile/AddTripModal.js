import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import Select from "react-select";
import { stringDateToISODateString, isNull } from "../../utils/functions";
import { insertTrip, getMyTrips } from "../../actions/trips";
import { getAllDestinationsName } from "../../actions/destinations";
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

  componentWillMount() {
    if (this.props.destinationsName.length === 0) {
      this.props.getAllDestinationsName();
    }
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
      isNull(this.destinationName.current.state) ||
      isNull(this.category.current.state) ||
      this.state.dateFrom >= this.state.dateTo
    )
      return false;
    return true;
  };

  addTrip = () => {
    if (this.inputIsCorrect()) {
      const newTrip = {
        userId: this.props.userId,
        destinationName: this.destinationName.current.state.value.label,
        planned: this.planned.current.value.label,
        category: this.category.current.state.value.label,
        dateFrom: stringDateToISODateString(this.state.dateFrom),
        dateTo: stringDateToISODateString(this.state.dateTo),
        tripInfo: this.tripInfo.current.value
      };
      this.props.insertTrip(newTrip).then(response => {
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
    console.log(date);
    this.setState({
      dateTo: date
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
    userId: state.user.userId,
    destinationsName: state.destinationsName,
    myTrips: state.myTrips
  }),
  { getAllDestinationsName, insertTrip, getMyTrips }
)(AddTripModal);
