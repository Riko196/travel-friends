import React, { Component } from "react";
import "./ProfileGallery.css";

class ProfileGallery extends Component {
  render() {
    return (   
      <div className="gallery-container">
          <i className="left i"></i>
          <button><img className="gallery-photo" src="" alt="first" onClick={this.galleryImageClick}></img></button>
          <button><img className="gallery-photo-middle" src="" alt="second" onClick={this.galleryImageClick}></img></button>
          <button><img className="gallery-photo" src="" alt="third" onClick={this.galleryImageClick}></img></button>
          <i className="right i"></i>
      </div>
    );
}

  galleryImageClick(){
    console.log("Zoomed.");
  }
}

export default ProfileGallery;