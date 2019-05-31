import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import { setUser, updateUser } from "../../actions/user";
import { profileConfig } from "../../utils/config";
import { modalStyle } from "./EditProfileModalStyle";

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

  updateUserName = () => {
    const userName = this.userName.current.value;
    if (userName === null || userName === "") {
      return;
    }

    const updatedUser = this.props.user;
    updatedUser.userName = userName;
    updateUser(updatedUser).then(result => {
      this.props.setUser(updatedUser);
      this.closeModal();
    });
  };

  render() {
    return (
      <div className="enter-username-modal-container">
        <button className="enter-username" onClick={this.openModal}>
          Enter the username:
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Enter the username"
          style={modalStyle}
        >
          <label className="modal-label">Username:</label>
          <p>
            We need your username on Messenger so you can be contacted by other
            friends.
          </p>
          <input
            className="input-text"
            type="text"
            name="userName"
            ref={this.userName}
            maxLength={profileConfig.inputLength}
          />
          <input
            type="button"
            value="Save the username"
            onClick={this.updateUserName}
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
)(SelectUserName);
