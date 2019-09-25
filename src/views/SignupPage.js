import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import Navbar from "../components/Navbar/Navbar";
import SideMain from "../components/SideMain/SideMain";
import SignupForm from "../components/SignupForm/SignupForm";
import { signup } from "../redux/actions/userActions";

const token = sessionStorage.getItem("token") || null;
class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstname: "",
        lastname: "",
        email: "",
        password: ""
      },
      redirect: false
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.registering) {
      this.setState({ redirect: true });
    }
  }

  onChange = e => {
    const { name, value } = e.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  };

  onSave = e => {
    e.preventDefault();
    this.props.signup(this.state.user);
  };

  render() {
    const { user, redirect } = this.state;
    if (redirect) {
      return <Redirect to="/login" />;
    }
    return (
      <>
        <Navbar />
        <SideMain />
        <SignupForm user={user} onChange={this.onChange} onSave={this.onSave} />
      </>
    );
  }
}

SignupPage.propTypes = {
  signup: PropTypes.func
};

const mapStateToProps = state => {
  return {
    registering: state.user.registering
  };
};

const mapDispatchToProps = {
  signup
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupPage);
