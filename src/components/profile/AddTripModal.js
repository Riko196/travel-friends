import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import DateInput from "date-input";
import moment from "moment";
import Select from "react-select";
import { removeAllSpaces } from "../../utils/functions";
import { setUser, updateUser } from "../../actions/user";
import { profileConfig } from "../../utils/config";
import { merge } from "lodash";
import DatePicker from "react-datepicker";
import styled from "styled-components";
import { tripModalStyle } from "./AddTripModalStyle";
import "./AddTripModal.css";

Modal.setAppElement(document.getElementById("root"));

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  // Hide checkbox visually but remain accessible to screen readers.
  // Source: https://polished.js.org/docs/#hidevisually
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`
const Icon = styled.svg`
  fill: none;
  stroke: blue;
  stroke-width: 2px;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => props.checked ? 'white' : 'white'}
  border-radius: 3px;
  transition: all 150ms;
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 1px blue;
  }
  ${Icon} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'}
  }
`
const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const Checkbox = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
)

class AddTripModal extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  getInputFinalValue = inputValue => {
    return removeAllSpaces(inputValue) === "" ? null : inputValue;
  };

  getSelectFinalValue = selectValue => {
    return selectValue === null ? null : selectValue.label;
  };

  addTrip = () => {
    
    /*updateUser(updatedUserValues, userRedux).then(() => {
      const updatedUserRedux = merge(userRedux, updatedUserValues);
      console.log("REDUX :", updatedUserRedux);
      this.props.setUser(updatedUserRedux);
      this.closeModal();
    });*/
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
              placeholder="&nbsp;"/>
          
          <label className="modal-label">Planning:</label>
            <Checkbox
              checked={this.state.checked}
              onChange={this.handleCheckboxChange}
            />
        <label className="modal-label">From:</label>
          <DatePicker/>

        <label className="modal-label">To:</label>
          <DatePicker/>

        <label className="modal-label">Additional info:</label>
          <textarea
            type="text"
            className="textarea"
          />
          <label className="modal-label">Category:</label>
          <Select/>
          
          <input
            type="button"
            value="Save trip"
            className="save-button"
          />
        </Modal>
      </div>
    );
  }
}

export default connect(
  /*state => ({
    user: state.user
  }),
  { setUser, updateUser }*/
)(AddTripModal);
