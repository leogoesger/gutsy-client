import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchCurrentUser} from '../actions/user-account';

import Layout from '../components/login/Layout';

export class Login extends React.Component {
  _fetchCurrentUser() {
    this.props.fetchCurrentUser();
  }
  render() {
    return (
      <Layout
        user={this.props.user}
        fetchCurrentUser={() => this._fetchCurrentUser()}
      />
    );
  }
}

Login.propTypes = {
  fetchCurrentUser: PropTypes.func.isRequired,
  user: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    user: state.userAccount.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrentUser: () => dispatch(fetchCurrentUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
