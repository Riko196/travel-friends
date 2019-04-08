import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import Modal from "react-modal";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { gender, destinations } from "../../utils/constants";
import { getMyFriends } from "../../actions/myFriends";
import { stringDateToISODate, isNull } from "../../utils/functions";
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
      isNull(this.destinationName.current.state.value.value) ||
      isNull(this.gender.current.state.value.value) ||
      stringDateToISODate(this.state.dateFrom) >
        stringDateToISODate(this.state.dateTo)
    )
      return false;
    return true;
  };

  openModal = () => {
    this.setState({ modalIsOpen: true, dateFrom: null, dateTo: null });
    window.FB.api("/me/picture?width=180&height=180", response => {
      console.log(response);
    });
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
      this.props
        .getMyFriends({
          destinationName: this.destinationName.current.state.value.value,
          dateFrom: stringDateToISODate(this.state.dateFrom),
          dateTo: stringDateToISODate(this.state.dateTo),
          gender: this.gender.current.state.value.value,
          userId: this.props.user.userId
        })
        .then(() => {
          this.closeModal();
          this.props.history.push("/home/my-friends");
        });
    }
  };

  render() {
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
            options={destinations}
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
      user: state.user,
      myFriends: state.myFriends
    }),
    { getMyFriends }
  )
)(FindThemModal);
