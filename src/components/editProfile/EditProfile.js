import React, { Component } from "react";

class EditProfile extends Component {
  render() {
    return (
      <div className="edit-profile">
        <form className="edit-form">
        <label>
          About me:
          <textarea
            type="text"
            />
        </label>
        <label >
          country:
          <input
            type="text"
            />
        </label>
        <label>
          education:
          <input
            type="text"
            />
        </label>
        <label>
          Speaking:
          <input
            type="text"
            />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

export default EditProfile;