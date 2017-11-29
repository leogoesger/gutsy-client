import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {loginUser} from '../actions/user-account';
import Layout from '../components/login/Layout';

export class Login extends React.Component {
  render() {
    return (
      <Layout
        currentUser={this.props.currentUser}
        loginUser={userData => this.props.loginUser(userData)}
        message={this.props.message}
      />
    );
  }
}

Login.propTypes = {
  currentUser: PropTypes.object,
  loginUser: PropTypes.func.isRequired,
  message: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    currentUser: state.userAccount.currentUser,
    message: state.userAccount.loginErrorMessage,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginUser: userData => dispatch(loginUser(userData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
