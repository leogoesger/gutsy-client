import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Layout from '../components/shared/signUpModal/Layout';
import {signUpUser, loginUser} from '../actions/user-account';

class SignUpModal extends React.Component {
  render() {
    return (
      <Layout
        dialogOpen={this.props.dialogOpen}
        signUpUser={userData => this.props.signUpUser(userData)}
        loginUser={userData => this.props.loginUser(userData)}
        toggleDialog={() => this.props.toggleDialog()}
        signUpErrorMessage={this.props.signUpErrorMessage}
        loginErrorMessage={this.props.loginErrorMessage}
      />
    );
  }
}

SignUpModal.propTypes = {
  dialogOpen: PropTypes.bool,
  toggleDialog: PropTypes.func.isRequired,
  signUpUser: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  signUpErrorMessage: PropTypes.string,
  loginErrorMessage: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    signUpErrorMessage: state.userAccount.signUpErrorMessage,
    loginErrorMessage: state.userAccount.loginErrorMessage,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUpUser: userData => dispatch(signUpUser(userData)),
    loginUser: userData => dispatch(loginUser(userData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpModal);
