/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import TextInput from "../TextInput/TextInput";

const LoginForm = ({ user, onChange, onSave }) => (
  <div className="column-4-sign">
    <form onSubmit={onSave}>
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
);

LoginForm.propTypes = {
  onSave: PropTypes.func,
  onChange: PropTypes.func,
  user: PropTypes.object
};

export default LoginForm;
