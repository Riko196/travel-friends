import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link, Redirect } from "react-router-dom";
import { compose } from "redux";
import MyFriendsDetail from "./MyFriendsDetail";
import { getMyFriends } from "../../actions/myFriends";
import Loading from "../helpful/Loading";
import {
  isISODateFormat,
  isGender,
  isDestinationName
} from "../../utils/functions";

import "./MyFriendsList.css";

class MyFriendsList extends Component {
  constructor() {
    super();

    this.state = {
      myFriendsLoaded: false,
      error: false
    };
  }

  componentDidMount() {
    const {
      getMyFriends,
      destinationName,
      userId,
      dateFrom,
      dateTo,
      gender
    } = this.props;

    if (
      !isDestinationName(destinationName) ||
      !isISODateFormat(dateFrom) ||
      !isISODateFormat(dateTo) ||
      !isGender(gender)
    ) {
      this.setState({ error: true });
      return;
    }

    const data = {
      destinationName: destinationName,
      userId: userId,
      dateFrom: dateFrom,
      dateTo: dateTo,
      gender: gender
    };

    this.setState({ myFriendsLoaded: false });
    getMyFriends(data).then(() => {
      this.setState({ myFriendsLoaded: true });
    });
  }

  render() {
    if (this.state.error) {
      return <Redirect to="/page-not-found" />;
    }

    if (this.state.myFriendLoaded === false) {
      return <Loading />;
    }
    const friends = this.props.myFriends;

    return (
      <div>
      <div className="background-image-friends">
      <img className="background-image" src={require(`../../images/cityPhotos/${
              this.props.destinationName
            }.jpg`)}></img>
      <div className="friend-list-wrapper">
        <p className="people-p">People who want to visit</p>
        <p className="destination-name-list">{this.props.destinationName}</p>
        <div className="my-friend-list-container">
          {/*<p>Friends with exact date trips:</p>*/}
          <div className="planned-exact">
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
          {/* {friends !== null &&
            (friends.friendsWithDate.length === 0 && <p><span style={{fontStyle: "italic", marginLeft: "15px"}}>No friends found</span></p>)} */}
          </div>
          <div className="planning">
          {/*<p>Friends with planned trips:</p>*/}
          {friends !== null &&
            friends.friendsWithPlanned.length !== 0 &&
            friends.friendsWithPlanned.map(friend => (
              <MyFriendsDetail detail={friend} destinationName={this.props.destinationName}/>
            ))}
          {friends !== null &&
            (friends.friendsWithPlanned.length === 0 && friends.friendsWithDate.length === 0 && (
              <p><span style={{fontStyle: "italic", marginLeft: "15px"}}>No friends found</span></p>
            ))}
          </div>
        </div>
      </div>
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
