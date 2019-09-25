import React, { Component } from "react";
import jwt from "jsonwebtoken";
import Navbar from "../components/Navbar/Navbar";

const token = sessionStorage.getItem("token");
const decodeToken = jwt.decode(token);
console.log(decodeToken);

class HomePage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="">
          <div className="welcome-title">
            <h2>Welcome to Banka {decodeToken.email} </h2>
            <p>You make money, We save and improve your life journey.</p>
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;
