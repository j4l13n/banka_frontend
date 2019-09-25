/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignupPage extends Component {
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
        <div className="about-sign">
          <div className="about-title">
            <h3>Let&apos;s setup your bank account!</h3>
          </div>
          <div className="about-body">
            <h3>
              <small>Your money is safe with us! Do not worry it</small>
              <br />
              <small>Should take a couple of minutes</small>
            </h3>
          </div>
        </div>
        <div className="column-4-sign">
          <form action="create_account.html" method="get" id="signup">
            <div className="group">
              <label htmlFor="">First Name</label>
              <input
                type="text"
                className="form"
                id="firstname"
                placeholder="first name (only letters)"
                required
              />
            </div>
            <div className="group">
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                autoComplete="off"
                className="form"
                id="lastname"
                placeholder="last name (only letters)"
                required
              />
            </div>
            <div className="group">
              <label htmlFor="">Email</label>
              <input
                type="email"
                autoComplete="off"
                className="form"
                id="email"
                placeholder="your Email (yourname@server.com)"
                required
              />
            </div>
            <div className="group">
              <label htmlFor="">Password</label>
              <input
                type="password"
                className="form"
                id="password"
                placeholder="Password (Eg: Reg56@edit)"
                required
              />
            </div>
            <div className="group">
              <label htmlFor="">Confirm</label>
              <input
                type="password"
                className="form"
                id="confirm"
                placeholder="Retype password (Eg: Reg56@edit)"
                required
              />
            </div>
            <div className="group">
              <input
                type="submit"
                className="btn btn-pri"
                id=""
                value="Sign up"
              />
              <Link to="/login" className="link-sign">
                Login
              </Link>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default SignupPage;
