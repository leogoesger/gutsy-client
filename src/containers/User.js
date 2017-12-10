import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Layout from '../components/user/Layout';
import {fetchCurrentUser} from '../actions/user-account';

export class User extends React.Component {
  componentWillMount() {
    this.props.fetchCurrentUser();
  }

  render() {
    return <Layout currentUser={this.props.currentUser} />;
  }
}

User.propTypes = {
  currentUser: PropTypes.object,
  message: PropTypes.string,
  fetchCurrentUser: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    currentUser: state.userAccount.currentUser,
    message: state.userAccount.fetchCurrentUserErrorMessage,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrentUser: () => dispatch(fetchCurrentUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
