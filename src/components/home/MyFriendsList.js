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

    var elements = document.getElementsByClassName("navbar-item");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.setProperty(
        "background-color",
        "royalblue",
        "important"
      );
    }

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

    let cityPhotoUrl = null;
    try {
      cityPhotoUrl = require(`../../images/cityPhotos/${
        this.props.destinationName
      }.jpg`);
    } catch (err) {
      cityPhotoUrl = null;
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
                    <Link
                      to={`/home/my-friends/profile/${friend.userId}`}
                      key={friend.userId}
                    >
                      <MyFriendsDetail detail={friend} />
                    </Link>
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
