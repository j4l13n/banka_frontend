import React from "react";
import { Link } from "react-router-dom";

const token = sessionStorage.getItem("token") || null;
console.log(token);

const Navbar = () => {
  const logout = () => {
    sessionStorage.clear();
    window.location = "/";
  };
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
          {token === null ? (
            <>
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
            </>
          ) : (
            <li>
              <button
                to="/"
                onClick={logout}
                className="nav-links remove-border"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
