import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import Modal from "react-modal";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { preferredGender, defaultPreferredGender } from "../../utils/constants";
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
      dateTo: null,
      anytime: false
    };

    this.destinationName = React.createRef();
    this.gender = React.createRef();
  }

  componentDidMount() {
    if (this.props.destinationsName.length === 0) {
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
      isNull(this.destinationName.current.state.value) ||
      isNull(this.gender.current.state.value) ||
      stringDateToISODateString(this.state.dateFrom) >
        stringDateToISODateString(this.state.dateTo)
    ) {
      alert("Bad input!");
      return false;
    }

    if (
      !this.state.anytime &&
      (isNull(this.state.dateFrom) || isNull(this.state.dateTo))
    ) {
      alert("Bad input!");
      return false;
    }
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
      const dateFrom = this.state.anytime
        ? null
        : stringDateToISODateString(this.state.dateFrom);
      const dateTo = this.state.anytime
        ? null
        : stringDateToISODateString(this.state.dateTo);
      const gender = this.gender.current.state.value.value;
      this.closeModal();
      this.props.history.push(
        `/logged-in/home/my-friends/${destinationName}/${dateFrom}/${dateTo}/${gender}`
      );
    }
  };

  handleChangePlanned = event => {
    this.setState({
      anytime: event.target.checked
    });
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
            className="x-button-findthem"
          />

          <h2 className="title-find-modal">Find Travel Friends</h2>

          {<label className="modal-label">Destination:</label>}
          <Select
            options={destinationsName}
            ref={this.destinationName}
            defaultInputValue={""}
            placeholder="Destination..."
          />

          <label className="modal-label">Anytime:</label>
          <input
            type="checkbox"
            id="cbx"
            style={{ display: "none" }}
            onChange={this.handleChangePlanned}
            defaultChecked={false}
          />
          <label htmlFor="cbx" className="toggle">
            <span />
          </label>

          {this.state.anytime === false && (
            <div>
              <label className="modal-label">From:</label>
              <DatePicker
                selected={this.state.dateFrom}
                onChange={this.handleChangeDateFrom}
                className="date-wide"
              />

              <label className="modal-label">To:</label>
              <DatePicker
                selected={this.state.dateTo}
                onChange={this.handleChangeDateTo}
                className="date-wide"
              />
            </div>
          )}

          {<label className="modal-label">Preferred gender:</label>}
          <Select
            options={preferredGender}
            ref={this.gender}
            defaultValue={defaultPreferredGender}
            placeholder="Gender..."
          />

          <p className="errors-show" />

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
    { getAllDestinationsName }
  )
)(FindThemModal);
