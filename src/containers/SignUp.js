import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {signUpUser} from '../actions/user-account';
import Layout from '../components/signUp/Layout';

export class SignUp extends React.Component {
  render() {
    return (
      <Layout
        signUpUser={userData => this.props.signUpUser(userData)}
        message={this.props.message}
      />
    );
  }
}

SignUp.propTypes = {
  signUpUser: PropTypes.func.isRequired,
  message: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    message: state.userAccount.signUpErrorMessage,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUpUser: userData => dispatch(signUpUser(userData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
