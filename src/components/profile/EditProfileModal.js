import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import DateInput from "date-input";
import moment from "moment";
import Select from "react-select";
import { removeAllSpaces } from "../../utils/functions";
import { gender, relationship, addiction } from "../../utils/constants";
import { setUser } from "../../actions/user";
import { profileConfig } from "../../utils/config";
import { modalStyle } from "./EditProfileModalStyle";
import "./EditProfileModal.css";

Modal.setAppElement(document.getElementById("root"));

class EditProfileModal extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.aboutMe = React.createRef();
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
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  changeUser = () => {
    const userRedux = this.props.user;
    let user = {};
    console.log(this.city.current.value);
    user.aboutMe =
      removeAllSpaces(this.aboutMe.current.value) === ""
        ? userRedux.aboutMe
        : this.aboutMe.current.value;
    user.birthday =
      this.birthday.current.state.value === ""
        ? userRedux.birthday
        : this.birthday.current.state.value;
    user.country =
      removeAllSpaces(this.country.current.value) === ""
        ? userRedux.country
        : this.country.current.value;
    user.city =
      removeAllSpaces(this.city.current.value) === ""
        ? userRedux.city
        : this.city.current.value;
    user.occupation =
      removeAllSpaces(this.occupation.current.value) === ""
        ? userRedux.occupation
        : this.occupation.current.value;
    user.gender =
      this.gender.current.state.value === null
        ? userRedux.gender
        : this.gender.current.state.value.label;
    user.relationship =
      this.relationship.current.state.value === null
        ? userRedux.relationship
        : this.relationship.current.state.value.label;
    user.education =
      removeAllSpaces(this.education.current.value) === ""
        ? userRedux.education
        : this.education.current.value;
    user.smoking =
      this.smoking.current.state.value === null
        ? userRedux.smoking
        : this.smoking.current.state.value.label;
    user.drinking =
      this.drinking.current.state.value === null
        ? userRedux.drinking
        : this.drinking.current.state.value.label;
    user.speaking =
      removeAllSpaces(this.speaking.current.value) === ""
        ? userRedux.speaking
        : this.speaking.current.value;

    console.log(user, userRedux);
    return { ...userRedux, ...user };
  };

  updateProfile = () => {
    if (this.birthday.current.state.error) {
      return;
    }

    let user = this.changeUser();

    this.props.setUser(user);
    this.closeModal();
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
            name="aboutMe"
            ref={this.aboutMe}
            className="textarea"
            defaultValue={user.aboutMe}
          />
          <label className="modal-label">Birthday:</label>
          <DateInput
            shouldValidate
            maxDate={moment().format("YYYY-MM-DD")}
            maxDateError="Your birthday should be a past date"
            invalidError={"Bad format of birthday"}
            ref={this.birthday}
            value={user.birthday === null ? "" : user.birthday}
          />
          <label className="modal-label">Country:</label>
          <input
            className="input-text"
            type="text"
            name="country"
            ref={this.country}
            maxLength={profileConfig.inputLength}
            defaultValue={user.country}
          />
          <label className="modal-label">City:</label>
          <input
            className="input-text"
            type="text"
            name="city"
            ref={this.city}
            maxLength={profileConfig.inputLength}
            defaultValue={user.city}
          />
          <label className="modal-label">Occupation:</label>
          <input
            className="input-text"
            type="text"
            name="occupation"
            ref={this.occupation}
            maxLength={profileConfig.inputLength}
            defaultValue={user.occupation}
          />
          <label className="modal-label">Gender:</label>
          <Select
            options={gender}
            ref={this.gender}
            defaultInputValue={user.gender === null ? "" : user.gender}
          />
          <label className="modal-label">Relationship:</label>
          <Select
            options={relationship}
            ref={this.relationship}
            defaultInputValue={
              user.relationship === null ? "" : user.relationship
            }
          />
          <label className="modal-label">Education:</label>
          <input
            className="input-text"
            type="text"
            name="education"
            ref={this.education}
            maxLength={profileConfig.inputLength}
            defaultValue={user.education}
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
            defaultValue={user.speaking}
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
