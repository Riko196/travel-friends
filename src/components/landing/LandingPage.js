import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import FacebookButton from "../auth/FacebookButton.js";
import { cleanState } from "../../actions/auth";
import { connect } from "react-redux";
import arrowDown from "../../images/landing/arrow-down.png";
import taskList from "../../images/landing/task-list.png";
import magnifier from "../../images/landing/magnifier.png";
import mail from "../../images/landing/mail.png";
import "./LandingPage.css";

class LandingPage extends Component {
  componentDidMount() {
    this.props.cleanState();
    var y = document.querySelectorAll(".landing-page__reveal");
    window.onscroll = function() {
      scroll();
    };

    document.querySelector(".scrollTo").addEventListener("click", e => {
      e.preventDefault();
      window.scrollTo(0, window.innerHeight);
    });

    function scroll() {
      var scrollT =
        document.documentElement.scrollTop || document.body.scrollTop;
      var thirdWindowHeight = window.innerHeight / 3;
      if (scrollT > thirdWindowHeight) {
        var t = 0;
        var j;
        for (j = 0; j < y.length; j++) {
          configureTimeout(y, j, t);
          t++;
        }
      }
    }

    function configureTimeout(y, j, t) {
      setTimeout(function() {
        if (!y[j].classList.contains("landing-page__reveal--shown")) {
          y[j].classList.add("landing-page__reveal--shown");
        }
      }, t * 150);
    }
  }

  render() {
    return (
      <div className="parent parent--landing">
        <div className="landing-page">
          <div className="landing-page__part landing-page__part--1">
            <div className="container-fluid py-5">
              <div>
                <div className="text-center">
                  <div className="landing-page__maxw">
                    <div className="text-uppercase text-xlarge font-weight-black text-shadow--1 mb-4">
                      You are at a right place to find your travel friends.
                    </div>
                    <p className="text-uppercase font-weight-bold text-medium text-shadow--1 mb-4">
                      Meet new people with same passion and share
                      your experience and costs with them!
                    </p>
                    <div className="mb-4 d-flex justify-content-center flex-wrap">
                      {/* <a href="#" className="btn btn--social-login btn--rounded btn--blue m-3 login-facebook cursor-pointer"> */}
                      <FacebookButton />
                      {/* </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="at-bottom">
            <p className="text-shadow--1 text-cond">
              By clicking “continue with facebook” you accept the{" "}
              <NavLink
                to="/terms-conditions"
                className="terms-conditions"
              >
                Terms &amp; Conditions
              </NavLink>{" "}
              and{" "}
              <NavLink to="/privacy-policy" className="privacy-policy">
                Privacy Policy
              </NavLink>{" "}
              of the website.
            </p>
            <div className="center-arrow">
            <a href="#how-it-works" className="scrollTo">
              <i className="fas fa-chevron-down" />
            </a>
            </div>
            </div>
          </div>
          <div
            id="how-it-works"
            className="landing-page__part landing-page__part--2 py-5"
          >
            <div className="container text-center mb-5">
              <div className="row justify-content-center">
                <div className="col-md-7">
                  <h1 className="font-primary font-weight-black mb-4 pt-4 landing-page__reveal">
                    HOW IT WORKS
                  </h1>
                  <img
                    src={arrowDown}
                    alt=""
                    className="mb-3 landing-page__reveal arrow-width"
                  />
                  <div className="landing-page__divider landing-page__reveal" />
                  <div className="mb-5">
                    <img
                      src={taskList}
                      alt=""
                      className="mb-3 landing-page__reveal img-width"
                    />
                    <h2 className="font-primary font-weight-black mb-3 landing-page__reveal">
                      SIGN UP
                    </h2>
                    <p className="landing-page__reveal">
                      Add your personal information, trips &amp; photos.
                    </p>
                  </div>
                  <div className="mb-5">
                    <img
                      src={magnifier}
                      alt=""
                      className="mb-3 landing-page__reveal img-width"
                    />
                    <h2 className="font-primary font-weight-black mb-3 landing-page__reveal">
                      FIND TRAVEL FRIENDS
                    </h2>
                    <p className="landing-page__reveal">
                      According your requirements find an ideal travel friend.
                    </p>
                  </div>
                  <div className="mb-5">
                    <img
                      src={mail}
                      alt=""
                      className="mb-3 landing-page__reveal img-width"
                    />
                    <h2 className="font-primary font-weight-black mb-3 landing-page__reveal">
                      CONTACT
                    </h2>
                    <p className="landing-page__reveal">Your last step. :)</p>
                  </div>
                  <div className="landing-page__divider landing-page__reveal" />
                  <h2 className="font-primary font-weight-black mb-3">
                    ARE YOU IN?
                  </h2>
                  <img src={arrowDown} alt="" className="mb-3 arrow-width-2" />
                  <div className="mb-4 d-flex justify-content-center flex-wrap">
                    {/* <a className="btn btn--social-login btn--rounded btn--blue m-3 login-facebook">
                            <div>
                               <div className="font-weight-bold">Continue with facebook</div>
                               <div className="small">*we will never post on your wall</div>
                            </div>
                         </a> */}
                    <FacebookButton />
                  </div>
                  <p>
                    By clicking “continue with facebook”{" "}
                    <NavLink
                      to="/terms-conditions"
                      className="terms-conditions"
                    >
                      Terms &amp; Conditions
                    </NavLink>{" "}
                    and{" "}
                    <NavLink to="/privacy-policy" className="privacy-policy">
                      Privacy Policy
                    </NavLink>{" "}
                    of the website.
                  </p>
                </div>
              </div>
            </div>
            <div className="container">
              <footer>
                <div className="d-flex justify-content-between flex-wrap">
                  <div>
                    Follow us:
                    <i className="fab fa-facebook-f mx-1" />{" "}
                    <i className="fab fa-instagram mx-1" />{" "}
                    <i className="fab fa-youtube mx-1" />
                  </div>
                  <div>
                    <NavLink
                      to="/terms-conditions"
                      className="terms-conditions"
                    >
                      Terms &amp; conditions
                    </NavLink>{" "}
                    <NavLink to="/privacy-policy" className="privacy-policy">
                      Privacy policy
                    </NavLink>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { cleanState }
)(LandingPage);
