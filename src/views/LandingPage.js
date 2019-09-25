import React, { Component } from "react";

class LandingPage extends Component {
  render() {
    return (
      <>
        <nav className="navbar">
          <span className="navbar-toggle" id="js-navbar-toggle">
            <i className="fa fa-bars fa-color"></i>
          </span>
          <a href="./index.html" className="logo">
            Banka
          </a>
          <ul className="main-nav" id="js-menu">
            <li>
              <a href="./html/login.html" className="nav-links">
                login
              </a>
            </li>
            <li>
              <a href="./html/signup.html" className="nav-links">
                sign up
              </a>
            </li>
          </ul>
        </nav>
        <div className="">
          <div className="welcome-title">
            <h2>Welcome to Banka</h2>
            <p>You make money, We save and improve your life journey.</p>
            <div className="">
              <a href="./html/login.html" className="login">
                Login
              </a>
              <a href="./html/signup.html" className="signup">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LandingPage;
