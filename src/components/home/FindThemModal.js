import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import Modal from "react-modal";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { gender } from "../../utils/constants";
import { getMyFriends } from "../../actions/myFriends";
import { getAllDestinationsName } from "../../actions/destinations";
import { stringDateToISODateString, isNull } from "../../utils/functions";
import { findThemModalStyle } from "./FindThemModalStyle";
import "./FindThemModal.css";

Modal.setAppElement(document.getElementById("root"));

class FindThemModal extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      dateFrom: null,
      dateTo: null
    };

    this.destinationName = React.createRef();
    this.gender = React.createRef();
  }

  componentWillMount() {
    if (this.props.destinationsName === null) {
      this.props.getAllDestinationsName();
    }
  }

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

  inputIsCorrect = () => {
    if (
      isNull(this.state.dateFrom) ||
      isNull(this.state.dateTo) ||
      isNull(this.destinationName.current.state.value) ||
      isNull(this.gender.current.state.value) ||
      stringDateToISODateString(this.state.dateFrom) >
        stringDateToISODateString(this.state.dateTo)
    )
      return false;
    return true;
  };

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

  findMyFriends = () => {
    if (this.inputIsCorrect()) {
      const destinationName = this.destinationName.current.state.value.value;
      const dateFrom = stringDateToISODateString(this.state.dateFrom);
      const dateTo = stringDateToISODateString(this.state.dateTo);
      const gender = this.gender.current.state.value.value;
      this.closeModal();
      this.props.history.push(
        `/home/my-friends/${destinationName}/${dateFrom}/${dateTo}/${gender}`
      );
    }
  };

  render() {
    const destinationsName =
      this.props.destinationsName === null
        ? []
        : this.props.destinationsName.map(element => {
            return {
              value: element.destinationName,
              label: element.destinationName
            };
          });

    return (
      <div className="findthem-modal-container">
        <button id="findthem" onClick={this.openModal}>
          Find them!
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Find Them"
          style={findThemModalStyle}
        >
          <input
            type="button"
            name="exit"
            value="X"
            onClick={this.closeModal}
            className="x-button"
          />

          <h2>Find Travel Friends</h2>

          <label className="modal-label">Destination:</label>
          <Select
            options={destinationsName}
            ref={this.destinationName}
            defaultInputValue={""}
          />

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

          <label className="modal-label">Gender:</label>
          <Select options={gender} ref={this.gender} defaultInputValue={""} />

          <input
            type="button"
            value="Find travel friends!"
            className="findthem-button"
            onClick={this.findMyFriends}
          />
        </Modal>
      </div>
    );
  }
}

export default compose(
  withRouter,
  connect(
    state => ({
      myFriends: state.myFriends,
      destinationsName: state.destinationsName
    }),
    { getMyFriends, getAllDestinationsName }
  )
)(FindThemModal);
