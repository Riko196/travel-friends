import React, { Component } from "react";
import { connect } from "react-redux";
import ProfileGallery from "../profileGallery/ProfileGallery";
import NavBar from "../navbar/Navbar";
import { getMyFriend } from "../../actions/myFriends";
import Loading from "../helpful/Loading";
import { ISODateStringTostringDate } from "../../utils/functions";
import "./MyFriendsProfile.css";

class MyFriendsProfile extends Component {
  constructor() {
    super();

    this.state = {
      myFriendLoaded: false
    };
  }

  componentDidMount() {
    const { userId, getMyFriend } = this.props;

    this.setState({ myFriendLoaded: false });
    getMyFriend(userId).then(() => {
      this.setState({ myFriendLoaded: true });
    });
  }

  render() {
    if (this.state.myFriendLoaded === false) {
      return <Loading />;
    }

    return (
      <div className="my-friend-profile-container">
        <NavBar />
        <div className="my-friend-profile-div">
          <div className="row">
            <div className="column" id="photo">
              <img
                className="my-friend-profile-photo"
                src={this.props.selectedFriend.profilePhoto}
                alt="Profile"
              />
              <p className="name-age-country">
                {this.props.selectedFriend.name}
              </p>
            </div>
            <div className="column">
              <p className="about-me">
                About Me: {this.props.selectedFriend.aboutme}
              </p>
              <p className="birthday">
                Birthday:{" "}
                {this.props.selectedFriend.birthday != null &&
                  ISODateStringTostringDate(this.props.selectedFriend.birthday)}
              </p>
            </div>
            <div className="column">
              <p className="country">
                Country: {this.props.selectedFriend.country}
              </p>
              <p className="city">City: {this.props.selectedFriend.city}</p>
              <p className="occupation">
                Occupation: {this.props.selectedFriend.occupation}
              </p>
              <p className="joined">Joined: </p>
              <p className="gender">
                Gender: {this.props.selectedFriend.gender}
              </p>
              <p className="relationship">
                Relationship: {this.props.selectedFriend.relationship}
              </p>
            </div>
            <div className="column">
              <p className="education">
                Education: {this.props.selectedFriend.education}
              </p>
              <p className="smoking">
                Smoking: {this.props.selectedFriend.smoking}
              </p>
              <p className="drinking">
                Drinking: {this.props.selectedFriend.drinking}
              </p>
              <p className="speaking">
                Speaking: {this.props.selectedFriend.speaking}
              </p>
              <p>Email: {this.props.selectedFriend.email}</p>
              {this.props.selectedFriend.userName !== null && (
                <a
                  href={"https://m.me/" + this.props.selectedFriend.userName}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button text="Send to messenger">Send to messenger</button>
                </a>
              )}
            </div>
          </div>
          <ProfileGallery />
        </div>
      </div>
    );
  }
}

export default connect(
  (state, props) => {
    const userId = Number(props.match.params.userId);

    return {
      userId,
      selectedFriend: state.selectedFriend
    };
  },
  { getMyFriend }
)(MyFriendsProfile);
