import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {signUpUser} from '../actions/user-account';
import Layout from '../components/signUp/Layout';
import {navigateTo} from '../utils/helpers';

export class SignUp extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (!this.props.currentUser && nextProps.currentUser) {
      navigateTo('/');
    }
  }
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
  currentUser: PropTypes.object,
  signUpUser: PropTypes.func.isRequired,
  message: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    currentUser: state.userAccount.currentUser,
    message: state.userAccount.signUpErrorMessage,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUpUser: userData => dispatch(signUpUser(userData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
