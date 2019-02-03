import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import FacebookButton from "../auth/FacebookButton.js";
import GoogleButton from "../auth/GoogleButton.js";
import arrowDown from "../../images/landing/arrow-down.png";
import taskList from "../../images/landing/task-list.png";
import magnifier from "../../images/landing/magnifier.png";
import mail from "../../images/landing/mail.png";
import "./LandingPage.css";

class LandingPage extends Component {
  render() {
    return (
      <div className="main">
        <div className="landingpage">
          <div className="title-text">
            <h1>
              YOU ARE ON A RIGHT PLACE FOR FINDING YOUR TRAVEL FRIENDS.
            </h1>
            <h2>
              MEET NEW PEOPLE WITH SAME PASSION FOR TRAVELING AND SHARE YOUR EXPERIENCE AND COSTS!
            </h2>
            <div className="login-buttons">
              <FacebookButton/>
              <GoogleButton/>
            </div>
            <p>
              BY CLICKING “CONTINUE WITH FACEBOOK” OR “CONTINUE WITH GOOGLE” YOU ACCEPT THE <span> </span>  
              <NavLink to="/terms-conditions" className="terms-conditions">TERMS & CONDITIONS</NavLink> <span> </span> 
              & <NavLink to="/privacy-policy" className="privacy-policy">PRIVACY POLICY</NavLink> OF THE WEBSITE.
            </p>
          </div>
          <div className="arrow-down"></div>
          <div className="landingpage-scroll">
            <div>
              <h1>HOW IT WORKS</h1>
              <img src={arrowDown} alt=""></img>
            </div>
            <hr></hr>
            <div className="sign-up">
              <img src={taskList} alt=""></img>
              <h2>SIGN UP</h2>
              <p>Add your personal information, trips & photos.</p>
            </div>
            <div className="find-friends">
              <img src={magnifier} alt=""></img>
              <h2>FIND TRAVEL FRIENDS</h2>
              <p>According your requirements find an ideal travel friend.</p>
            </div>
            <div className="contact">
              <img src={mail} alt=""></img>
              <h2>CONTACT</h2>
              <p>Your last step.</p>
            </div>
            <hr></hr>
            <h2>ARE YOU IN?</h2>
            <img src={arrowDown} alt=""></img>
            <div className="login-buttons">
              <FacebookButton/>
              <GoogleButton/>
            </div>
            <p>
              By clicking “continue with Facebook” or “continue with Google” you accept the <span> </span>
              <NavLink to="/terms-conditions" className="terms-conditions">Terms & Conditions</NavLink> <span> </span>
              and <NavLink to="/privacy-policy" className="privacy-policy">Privacy Policy</NavLink> of the website.  
            </p>
            <footer>
              <div className="social-icons">
                Follow us:
                <img className="fb-icon" alt=""></img>
                <img className="instagram-icon" alt=""></img>
                <img className="youtube-icon" alt=""></img>
              </div>
              <div className="terms-policy">
                <NavLink to="/terms-conditions" className="terms-conditions">Terms & conditions</NavLink> <span> </span>
                <NavLink to="/privacy-policy" className="privacy-policy">Privacy policy</NavLink>
              </div>
            </footer>
          </div>
        </div>
      </div>   
    );
  }
}

export default LandingPage;
