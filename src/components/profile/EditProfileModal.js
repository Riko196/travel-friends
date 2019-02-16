import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import DateInput from "date-input";
import moment from "moment";
import Select from "react-select";
import { assignIn } from "lodash";
import { removeAllSpaces } from "../../utils/functions";
import { gender, relationship, addiction } from "../../utils/constants";
import { setUser } from "../../actions/user";
import { profileConfig } from "../../utils/config";

Modal.setAppElement(document.getElementById("root"));

class EditProfileModal extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      errorText: null
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
    this.setState({ modalIsOpen: true, errorText: null });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false, errorText: null });
  };

  checkForLimits = () => {
    if (this.aboutMe.current.value.length > profileConfig.textareaLength) {
      this.setState({
        errorText: `About me text can have only ${
          profileConfig.textareaLength
        } characters`
      });
    } else if (this.country.current.value.length > profileConfig.inputLength) {
      this.setState({
        errorText: `Country text can have only ${
          profileConfig.inputLength
        } characters`
      });
    } else if (this.city.current.value.length > profileConfig.inputLength) {
      this.setState({
        errorText: `City text can have only ${
          profileConfig.inputLength
        } characters`
      });
    } else if (
      this.occupation.current.value.length > profileConfig.inputLength
    ) {
      this.setState({
        errorText: `Occupation text can have only ${
          profileConfig.inputLength
        } characters`
      });
    } else if (
      this.education.current.value.length > profileConfig.inputLength
    ) {
      this.setState({
        errorText: `Education text can have only ${
          profileConfig.inputLength
        } characters`
      });
    } else if (this.speaking.current.value.length > profileConfig.inputLength) {
      this.setState({
        errorText: `Speaking text can have only ${
          profileConfig.inputLength
        } characters`
      });
    }
  };

  changeUser = userRedux => {
    let user = {};
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

    return assignIn(user, userRedux);
  };

  updateProfile = () => {
    this.setState({ errorText: null });
    this.checkForLimits();

    if (this.state.errorText !== null || this.birthday.current.state.error) {
      return;
    }
    const userRedux = this.props.user;
    let user = this.changeUser(userRedux);

    this.props.setUser(user);
    this.closeModal();
  };

  render() {
    return (
      <div className="edit-profile-modal-container">
        <button onClick={this.openModal}>Edit the profile</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Edit the profile"
        >
          <input
            type="button"
            name="exit"
            value="X"
            onClick={this.closeModal}
          />

          <h2>Type just what you would like to change</h2>
          <p>About me:</p>
          <textarea type="text" name="aboutMe" ref={this.aboutMe} />

          <p>Birthday:</p>
          <DateInput
            shouldValidate
            maxDate={moment().format("YYYY-MM-DD")}
            maxDateError="Your birthday should be a past date"
            invalidError={"Bad format of birthday"}
            ref={this.birthday}
          />

          <p>Country:</p>
          <input type="text" name="country" ref={this.country} />

          <p>City:</p>
          <input type="text" name="city" ref={this.city} />

          <p>Occupation:</p>
          <input type="text" name="occupation" ref={this.occupation} />

          <p>Gender:</p>
          <Select options={gender} ref={this.gender} />

          <p>Relationship:</p>
          <Select options={relationship} ref={this.relationship} />

          <p>Education:</p>
          <input type="text" name="education" ref={this.education} />

          <p>Smoking:</p>
          <Select options={addiction} ref={this.smoking} />

          <p>Drinking:</p>
          <Select options={addiction} ref={this.drinking} />

          <p>Speaking:</p>
          <input type="text" name="speaking" ref={this.speaking} />

          {this.state.errorText !== null && <p>{this.state.errorText}</p>}

          <input
            type="button"
            value="Save and exit"
            onClick={this.updateProfile}
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
