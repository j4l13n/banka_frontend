/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from "react";
import { Link } from "react-router-dom";

class LoginPage extends Component {
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
              <small>Your money is safe with us! Don&apos;t worry it</small>
              <br />
              <small>Should take a couple of minutes</small>
            </h3>
          </div>
        </div>
        <div className="column-4-sign">
          <form method="get" id="login">
            <div className="group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                autoComplete="off"
                className="form"
                id="email"
                placeholder="Email (youname@server.com)"
                required
              />
              <span className="email-error"></span>
            </div>
            <div className="group">
              <label htmlFor="">Password</label>
              <input
                type="password"
                autoComplete="off"
                className="form"
                id="password"
                placeholder="Password (Eg: Reg56@edit)"
                required
              />
            </div>
            <div className="group">
              <input
                type="submit"
                className="btn btn-pri"
                id="button"
                value="Sign in"
              />
              <Link to="/signup" className="link-sign">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default LoginPage;
