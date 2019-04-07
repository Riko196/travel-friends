import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { compose } from "redux";
import MyFriendsDetail from "./MyFriendsDetail";
import { setMyFriend } from "../../actions/myFriend";

class MyFriendsList extends Component {
  handleChooseFriend = friend => {
    this.props.setMyFriend(friend);
  };

  render() {
    return (
      <div className="my-friend-list-container">
        {this.props.myFriends !== null &&
          this.props.myFriends.length !== 0 &&
          this.props.myFriends.map(friend => (
            <Link
              to={"/home/my-friends/profile"}
              onClick={e => this.handleChooseFriend(friend)}
              key={friend.userId}
            >
              <MyFriendsDetail detail={friend} />
            </Link>
          ))}
        {this.props.myFriends !== null &&
          (this.props.myFriends.length === 0 && <p>No friends found</p>)}
      </div>
    );
  }
}

export default compose(
  withRouter,
  connect(
    state => ({
      myFriends: state.myFriends
    }),
    { setMyFriend }
  )
)(MyFriendsList);
