import React, { Component } from "react";
import { Link } from "react-router-dom";

class LandingPage extends Component {
  render() {
    return (
      <>
        <nav className="navbar">
          <span className="navbar-toggle" id="js-navbar-toggle">
            <i className="fa fa-bars fa-color"></i>
          </span>
          <Link to="/" className="logo">
            Banka
          </Link>
          <ul className="main-nav" id="js-menu">
            <li>
              <Link to="/login" className="nav-links">
                login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="nav-links">
                sign up
              </Link>
            </li>
          </ul>
        </nav>
        <div className="">
          <div className="welcome-title">
            <h2>Welcome to Banka</h2>
            <p>You make money, We save and improve your life journey.</p>
            <div className="">
              <Link to="/login" className="login">
                Login
              </Link>
              <Link to="/signup" className="signup">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LandingPage;
