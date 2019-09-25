/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Navbar from "../components/Navbar/Navbar";
import SideMain from "../components/SideMain/SideMain";
import LoginForm from "../components/LoginForm/LoginForm";
import { login } from "../redux/actions/userActions";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
        password: ""
      },
      redirect: false
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.loggedin) {
      console.log(newProps);
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
    this.props.login(this.state.user);
  };

  render() {
    const { user, redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <>
        <Navbar />
        <SideMain />
        <LoginForm user={user} onChange={this.onChange} onSave={this.onSave} />
      </>
    );
  }
}

LoginPage.propTypes = {
  login: PropTypes.func
};

const mapStateToProps = state => {
  console.log(state.user);
  return {
    loggedin: state.user.loggedin
  };
};

const mapDispatchToProps = {
  login
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
