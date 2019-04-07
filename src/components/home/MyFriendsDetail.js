import React, { Component } from "react";

class MyFriendsDetail extends Component {
  render() {
    return (
      <div className="my-friend-detail-container">
        <img src={this.props.detail.profilePhoto} alt={"Friend"} />
        <p>{this.props.detail.name}</p>
      </div>
    );
  }
}

export default MyFriendsDetail;
