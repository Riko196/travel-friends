import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { compose } from "redux";
import MyFriendsDetail from "./MyFriendsDetail";
import { getMyFriends } from "../../actions/myFriends";
import Loading from "../helpful/Loading";

import "./MyFriendsList.css";

class MyFriendsList extends Component {
  constructor() {
    super();

    this.state = {
      myFriendsLoaded: false
    };
  }

  componentDidMount() {
    const { getMyFriends } = this.props;
    const data = {
      destinationName: this.props.destinationName,
      userId: this.props.userId,
      dateFrom: this.props.dateFrom,
      dateTo: this.props.dateTo,
      gender: this.props.gender
    };

    this.setState({ myFriendsLoaded: false });
    getMyFriends(data).then(() => {
      this.setState({ myFriendsLoaded: true });
    });
  }
  render() {
    if (this.state.myFriendLoaded === false) {
      return <Loading />;
    }
    const friends = this.props.myFriends;

    return (
      <div className="friend-list-wrapper">
        <p className="destination-name-list">{this.props.destinationName}</p>
        <div className="my-friend-list-container">
          <p>Friends with exact date trips:</p>
          {friends !== null &&
            friends.friendsWithDate.length !== 0 &&
            friends.friendsWithDate.map(friend => (
              <Link
                to={`/home/my-friends/profile/${friend.userId}`}
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
                to={`/home/my-friends/profile/${friend.userId}`}
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
    (state, props) => {
      const destinationName = props.match.params.destinationName;
      const dateFrom = props.match.params.dateFrom;
      const dateTo = props.match.params.dateTo;
      const gender = props.match.params.gender;

      return {
        destinationName,
        dateFrom,
        dateTo,
        gender,
        userId: state.user.userId,
        myFriends: state.myFriends
      };
    },
    { getMyFriends }
  )
)(MyFriendsList);
