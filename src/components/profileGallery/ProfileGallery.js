import React, { Component } from "react";
import "./ProfileGallery.css";

class ProfileGallery extends Component {
  render() {
    return (
      <div className="gallery-container">
        <i className="left i" />
        <button>
          <img
            alt="galleryPhoto"
            className="gallery-photo"
            src=""
            onClick={this.galleryImageClick}
          />
        </button>
        <i className="right i" />
      </div>
    );
  }

  galleryImageClick() {
    console.log("Zoomed.");
  }
}

export default ProfileGallery;
