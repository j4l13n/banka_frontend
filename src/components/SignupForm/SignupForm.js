import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import TextInput from "../TextInput/TextInput";

const SignupForm = ({ onSave, onChange, user }) => (
  <div className="column-4-sign">
    <form onSubmit={onSave} id="signup">
      <TextInput
        label="Firstname"
        type="text"
        value={user.firstname}
        onChange={onChange}
        placeholder="first name (only letters)"
        id="firstname"
        name="firstname"
      />
      <TextInput
        label="Lastname"
        type="text"
        value={user.lastname}
        onChange={onChange}
        id="lastname"
        placeholder="last name (only letters)"
        name="lastname"
      />
      <TextInput
        label="Email"
        type="email"
        value={user.email}
        name="email"
        id="email"
        onChange={onChange}
        placeholder="your Email (yourname@server.com)"
      />
      <TextInput
        label="Password"
        type="password"
        value={user.password}
        id="password"
        onChange={onChange}
        placeholder="Password (Eg: Reg56@edit)"
        name="password"
      />
      <div className="group">
        <input type="submit" className="btn btn-pri" id="" value="Sign up" />
        <Link to="/login" className="link-sign">
          Login
        </Link>
      </div>
    </form>
  </div>
);

SignupForm.propTypes = {
  onSave: PropTypes.func,
  onChange: PropTypes.func,
  user: PropTypes.object
};

export default SignupForm;
