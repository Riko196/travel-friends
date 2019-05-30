import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import DateInput from "date-input";
import moment from "moment";
import Select from "react-select";
import {
  getInputFinalValue,
  getBirthdayFinalValue,
  getSelectFinalValue
} from "../../utils/functions";
import { gender, relationship, addiction } from "../../utils/constants";
import { setUser, updateUser } from "../../actions/user";
import { profileConfig } from "../../utils/config";
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
    this.country = React.createRef();
    this.city = React.createRef();
    this.occupation = React.createRef();
    this.gender = React.createRef();
    this.relationship = React.createRef();
    this.education = React.createRef();
    this.smoking = React.createRef();
    this.drinking = React.createRef();
    this.speaking = React.createRef();

    this.updatedProfile = {};
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
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
    this.updatedProfile.city = getInputFinalValue(this.city.current.value);
    this.updatedProfile.occupation = getInputFinalValue(
      this.occupation.current.value
    );
    this.updatedProfile.gender = getSelectFinalValue(
      this.gender.current.state.value
    );
    this.updatedProfile.relationship = getSelectFinalValue(
      this.relationship.current.state.value
    );
    this.updatedProfile.education = getInputFinalValue(
      this.education.current.value
    );
    this.updatedProfile.smoking = getSelectFinalValue(
      this.smoking.current.state.value
    );
    this.updatedProfile.drinking = getSelectFinalValue(
      this.drinking.current.state.value
    );
    this.updatedProfile.speaking = getInputFinalValue(
      this.speaking.current.value
    );

    Object.keys(this.updatedProfile).forEach(
      key => this.updatedProfile[key] == null && delete this.updatedProfile[key]
    );
    const updatedUser = merge(this.props.user, this.updatedProfile);
    updateUser(updatedUser).then(result => {
      this.props.setUser(updatedUser);
      this.closeModal();
    });
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
          <h2>Edit profile</h2>
          <label className="modal-label">About me:</label>
          <textarea
            type="text"
            name="aboutme"
            ref={this.aboutme}
            className="textarea"
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
            maxLength={profileConfig.inputLength}
          />
          <label className="modal-label">City:</label>
          <input
            className="input-text"
            type="text"
            name="city"
            ref={this.city}
            maxLength={profileConfig.inputLength}
          />
          <label className="modal-label">Occupation:</label>
          <input
            className="input-text"
            type="text"
            name="occupation"
            ref={this.occupation}
            maxLength={profileConfig.inputLength}
          />
          <label className="modal-label">Gender:</label>
          <Select options={gender} ref={this.gender} />
          <label className="modal-label">Relationship:</label>
          <Select options={relationship} ref={this.relationship} />
          <label className="modal-label">Education:</label>
          <input
            className="input-text"
            type="text"
            name="education"
            ref={this.education}
            maxLength={profileConfig.inputLength}
          />
          <label className="modal-label">Smoking:</label>
          <Select
            options={addiction}
            ref={this.smoking}
            defaultInputValue={user.smoking === null ? "" : user.smoking}
          />
          <label className="modal-label">Drinking:</label>
          <Select
            options={addiction}
            ref={this.drinking}
            defaultInputValue={user.drinking === null ? "" : user.drinking}
          />
          <label className="modal-label">Speaking:</label>
          <input
            className="input-text"
            type="text"
            name="speaking"
            ref={this.speaking}
            maxLength={profileConfig.inputLength}
          />
          <input
            type="button"
            value="Save profile"
            onClick={this.updateProfile}
            className="save-button"
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
