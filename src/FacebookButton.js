import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";

class FacebookButton extends Component {
  responseFacebook = response => {
    console.log(response);
  };

  componentClicked = () => {};
  render() {
    return (
      <div className="facebook-login">
        <FacebookLogin
          appId="2262789030633956"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      </div>
    );
  }
}

export default FacebookButton;
