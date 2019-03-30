import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import DateInput from "date-input";
import moment from "moment";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { removeAllSpaces } from "../../utils/functions";
import { gender } from "../../utils/constants";
import { setUser, updateUser } from "../../actions/user";
import { profileConfig } from "../../utils/config";
import { merge } from "lodash";
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
    
        this.destination = React.createRef();
        this.gender = React.createRef();
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

  render() {
    const user = this.props.user;
    return (
      <div className="findthem-modal-container">
        <button id="findthem" onClick={this.openModal}>Find them!</button>
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
          <input
            type="text"
            className="text-input"
            id="destination-input"
            placeholder="&nbsp;"
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
         <Select
            options={gender}
            ref={this.gender}
            defaultInputValue={""}
          />
          
          <input
            type="button"
            value="Find travel friends!"
            className="findthem-button"
            onClick={this.addTrip}
          />
        </Modal>
      </div>
    );
  }
}

export default connect(
  state => ({
    user: state.user
  }),
  { setUser }
)(FindThemModal);
