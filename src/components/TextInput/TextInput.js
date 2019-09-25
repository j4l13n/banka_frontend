/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import PropTypes from "prop-types";

const TextInput = ({ value, label, type, name, placeholder, id, onChange }) => (
  <>
    <div className="group">
      <label htmlFor="email">{label}</label>
      <input
        type={type}
        autoComplete="off"
        className="form"
        name={name}
        onChange={onChange}
        id={id}
        value={value}
        placeholder={placeholder}
        required
      />
      <span className="email-error"></span>
    </div>
  </>
);

TextInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string
};

export default TextInput;
