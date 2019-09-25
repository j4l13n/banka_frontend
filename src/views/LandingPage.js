import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

class LandingPage extends Component {
  render() {
    return (
      <>
        <Navbar />
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
