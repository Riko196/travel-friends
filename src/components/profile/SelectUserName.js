import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import { setUser, updateUser } from "../../actions/user";
import { modalStyle } from "./EditProfileModalStyle";
import { isInputValid, getDefaultValue } from "../../utils/functions";
import { inputMaxLength } from "../../utils/constants";

import "./SelectUserName.css";

Modal.setAppElement(document.getElementById("root"));

class SelectUserName extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.userName = React.createRef();
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  inputIsCorrect = userName => {
    if (userName === null || userName === "") {
      alert("Input can not be empty!");
      return false;
    }

    if (!isInputValid(userName)) {
      alert("Unallowed characters!");
      return false;
    }

    return true;
  };

  updateUserName = () => {
    const userName = this.userName.current.value;

    if (this.inputIsCorrect(userName)) {
      const updatedUser = this.props.user;
      updatedUser.userName = userName;
      updateUser(updatedUser).then(result => {
        this.props.setUser(updatedUser);
        this.closeModal();
      });
    }
  };

  render() {
    return (
      <div className="enter-username-modal-container">
        <button className="enter-username" onClick={this.openModal}>
          Set Messenger username
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Enter the username"
          style={modalStyle}
        >
          <label className="modal-label">Username:</label>
          <p className="p-messenger">
            Your messenger username will be used to enable direct messenger
            chatting with other users that provided their username.
          </p>
          <input
            className="input-text"
            type="text"
            name="userName"
            ref={this.userName}
            defaultValue={getDefaultValue(this.props.user.userName)}
            maxLength={inputMaxLength}
          />
          <input
            type="button"
            value="Save the username"
            onClick={this.updateUserName}
            className="save-button"
          />
          <input
            type="button"
            name="exit"
            value="X"
            onClick={this.closeModal}
            className="x-button"
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
)(SelectUserName);
