import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { compose } from "redux";
import MyFriendsDetail from "./MyFriendsDetail";
import { setSelectedFriend } from "../../actions/myFriends";
import "./MyFriendsList.css";

class MyFriendsList extends Component {
  handleChooseFriend = friend => {
    this.props.setSelectedFriend(friend);
  };

  render() {
    const friends = this.props.myFriends;

    return (
      <div className="friend-list-wrapper">
        <p className="destination-name-list">Bratislava, Slovakia</p>
        <div className="my-friend-list-container">
          <p>Friends with exact date trips:</p>
          {friends !== null &&
            friends.friendsWithDate.length !== 0 &&
            friends.friendsWithDate.map(friend => (
              <Link
                to={"/home/my-friends/profile"}
                onClick={e => this.handleChooseFriend(friend)}
                key={friend.userId}
              >
                <MyFriendsDetail detail={friend} />
              </Link>
            ))}
          {friends !== null &&
            (friends.friendsWithDate.length === 0 && <p>No friends found</p>)}

          <p>Friends with planned trips:</p>
          {friends !== null &&
            friends.friendsWithPlanned.length !== 0 &&
            friends.friendsWithPlanned.map(friend => (
              <Link
                to={"/home/my-friends/profile"}
                onClick={e => this.handleChooseFriend(friend)}
                key={friend.userId}
              >
                <MyFriendsDetail detail={friend} />
              </Link>
            ))}
          {friends !== null &&
            (friends.friendsWithPlanned.length === 0 && (
              <p>No friends found</p>
            ))}
        </div>
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
    { setSelectedFriend }
  )
)(MyFriendsList);
