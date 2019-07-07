import React, { Component } from "react";
import axios from 'axios';
import "./ProfileGallery.css";

class ProfileGallery extends Component {
  constructor(props) {
    super(props);
      this.state = {
        selectedFile: null,
        loaded: null
      }
  }

  onChangeHandler = event =>{
    console.log(event.target.files[0]);
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0
      }, function () {
      console.log(this.state);
      }
    )
  }

  onClickHandler = () => {
    const data = new FormData()
    data.append('file', this.state.selectedFile)
    for (var key of data.entries()) {
      console.log(key[0] + ', ' + key[1]);
    }
    axios.post("http://localhost:8080/upload", data, { // receive two parameter endpoint url, form data 
      })
      .then(res => { // then print response status
        console.log(res.statusText)
      })
  }

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


        <input type="file" name="file" onChange={this.onChangeHandler}/>
        <button type="button" onClick={this.onClickHandler}>Upload</button>
      </div>
    );
  }

  galleryImageClick() {
    console.log("Zoomed.");
  }
}

export default ProfileGallery;
