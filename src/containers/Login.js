import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Layout from '../components/login/Layout';

export class Login extends React.Component {
  render() {
    return <Layout user={this.props.user} />;
  }
}

Login.propTypes = {
  user: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    user: state.userAccount.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrentUser: () => dispatch(),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
