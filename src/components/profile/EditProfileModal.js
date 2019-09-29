import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import DateInput from "date-input";
import moment from "moment";
import Select from "react-select";
import {
  getInputFinalValue,
  getBirthdayFinalValue,
  getSelectFinalValue,
  getDefaultValue,
  isInputValid
} from "../../utils/functions";
import {
  gender,
  inputMaxLength,
  textareaMaxLength
} from "../../utils/constants";
import { setUser, updateUser } from "../../actions/user";
import { merge } from "lodash";
import { modalStyle } from "./EditProfileModalStyle";
import "./EditProfileModal.css";

Modal.setAppElement(document.getElementById("root"));

class EditProfileModal extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.aboutme = React.createRef();
    this.birthday = React.createRef();
    this.gender = React.createRef();

    this.updatedProfile = {};
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  inputIsCorrect = () => {
    if (
      !isInputValid(this.aboutme.current.value) ||
      !isInputValid(this.country.current.value)
    ) {
      alert("Unallowed characters!");
      return false;
    }
    return true;
  };

  updateProfile = () => {
    if (this.birthday.current.state.error) {
      return;
    }

    this.updatedProfile.aboutme = getInputFinalValue(
      this.aboutme.current.value
    );
    this.updatedProfile.birthday = getBirthdayFinalValue(
      this.birthday.current.state.value
    );
    this.updatedProfile.country = getInputFinalValue(
      this.country.current.value
    );
    this.updatedProfile.gender = getSelectFinalValue(
      this.gender.current.state.value
    );

    Object.keys(this.updatedProfile).forEach(
      key => this.updatedProfile[key] == null && delete this.updatedProfile[key]
    );
    const updatedUser = merge(this.props.user, this.updatedProfile);
    if (this.inputIsCorrect(updatedUser)) {
      updateUser(updatedUser).then(result => {
        this.props.setUser(updatedUser);
        this.closeModal();
      });
    }
  };

  render() {
    const user = this.props.user;
    return (
      <div className="edit-profile-modal-container">
        <button className="edit-profile" onClick={this.openModal}>
          Edit profile
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Edit the profile"
          style={modalStyle}
        >
          <input
            type="button"
            name="exit"
            value="X"
            onClick={this.closeModal}
            className="x-button"
          />
          <h2 className="edit-profile-title">Edit profile</h2>
          <label className="modal-label">About me:</label>
          <textarea
            type="text"
            name="aboutme"
            ref={this.aboutme}
            className="textarea"
            maxLength={textareaMaxLength}
            defaultValue={getDefaultValue(user.aboutme)}
          />
          <label className="modal-label">Birthday:</label>
          <DateInput
            shouldValidate
            maxDate={moment().format("YYYY-MM-DD")}
            maxDateError="Your birthday should be a past date"
            invalidError={"Bad format of birthday"}
            ref={this.birthday}
          />
          <label className="modal-label">Country:</label>
          <input
            className="input-text"
            type="text"
            name="country"
            ref={this.country}
            maxLength={inputMaxLength}
            defaultValue={getDefaultValue(user.country)}
          />
          <label className="modal-label">Gender:</label>
          <Select
            options={gender}
            ref={this.gender}
            defaultInputValue={getDefaultValue(user.gender)}
          />
          <input
            type="button"
            value="Save profile"
            onClick={this.updateProfile}
            className="save-button-edit"
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
)(EditProfileModal);
