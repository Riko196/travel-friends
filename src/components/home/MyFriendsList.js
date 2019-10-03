import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import { compose } from "redux";
import MyFriendsDetail from "./MyFriendsDetail";
import { getMyFriends } from "../../actions/myFriends";
import Loading from "../helpful/Loading";
import {
  isISODateFormat,
  isPreferredGender,
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

    if (!isDestinationName(destinationName) || !isPreferredGender(gender)) {
      this.setState({ error: true });
      return;
    }

    if (
      (!isISODateFormat(dateFrom) || !isISODateFormat(dateTo)) &&
      (dateFrom !== "null" && dateTo !== "null")
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
      return <Redirect to="/logged-in/page-not-found" />;
    }

    if (this.state.myFriendLoaded === false) {
      return <Loading />;
    }
    const friends = this.props.myFriends;

    let cityPhotoUrl = null;
    try {
      cityPhotoUrl = require(`../../images/cityPhotos/${this.props.destinationName}.jpg`);
    } catch (err) {
      cityPhotoUrl = require(`../../images/destination_default.jpg`);
    }

    return (
      <div>
        <div className="background-image-friends">
          {cityPhotoUrl !== null && (
            <img className="background-image" src={cityPhotoUrl} alt={""} />
          )}
          <div className="friend-list-wrapper">
            <p className="people-p">People who want to visit</p>
            <p className="destination-name-list">
              {this.props.destinationName}
            </p>
            <div className="my-friend-list-container">
              <div className="planned-exact">
                {friends !== null &&
                  friends.friendsWithDate.length !== 0 &&
                  friends.friendsWithDate.map(friend => (
                    <MyFriendsDetail
                      key={friend.userId}
                      detail={friend}
                      destinationName={this.props.destinationName}
                      planned={false}
                    />
                  ))}
              </div>
              <div className="planning">
                {friends !== null &&
                  friends.friendsWithPlanned.length !== 0 &&
                  friends.friendsWithPlanned.map(friend => (
                    <MyFriendsDetail
                      key={friend.userId}
                      detail={friend}
                      destinationName={this.props.destinationName}
                      planned={true}
                    />
                  ))}
                {friends !== null &&
                  (friends.friendsWithPlanned.length === 0 &&
                    friends.friendsWithDate.length === 0 && (
                      <p>
                        <span
                          className="no-friends-found"
                          style={{ fontStyle: "italic", marginLeft: "15px" }}
                        >
                          No friends found
                        </span>
                      </p>
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
