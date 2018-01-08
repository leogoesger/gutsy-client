import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Layout from '../components/shared/signUpModal/Layout';
import {signUpUser, loginUser, closeDialog} from '../actions/user-account';

class SignUpModal extends React.Component {
  render() {
    return (
      <Layout
        dialogOpen={this.props.dialogOpen}
        path={this.props.path}
        signUpUser={userData => this.props.signUpUser(userData)}
        loginUser={userData => this.props.loginUser(userData)}
        signUpErrorMessage={this.props.signUpErrorMessage}
        loginErrorMessage={this.props.loginErrorMessage}
        closeDialog={() => this.props.closeDialog()}
      />
    );
  }
}

SignUpModal.propTypes = {
  closeDialog: PropTypes.func,
  dialogOpen: PropTypes.bool,
  path: PropTypes.object,
  signUpUser: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  signUpErrorMessage: PropTypes.string,
  loginErrorMessage: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    dialogOpen: state.userAccount.dialogOpen,
    signUpErrorMessage: state.userAccount.signUpErrorMessage,
    loginErrorMessage: state.userAccount.loginErrorMessage,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeDialog: () => dispatch(closeDialog()),
    signUpUser: userData => dispatch(signUpUser(userData)),
    loginUser: userData => dispatch(loginUser(userData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpModal);
