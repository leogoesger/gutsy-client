import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {fetchCurrentUser, logOutUser} from '../actions/user-account';
import Layout from '../components/shared/header/Layout';

class Header extends React.Component {
  constructor(props) {
    super(props);
    if (window.localStorage.gutsyJwt && !props.currentUser) {
      this.props.fetchCurrentUser();
    }
  }

  render() {
    return (
      <Layout
        currentUser={this.props.currentUser}
        logOutUser={() => this.props.logOutUser()}
      />
    );
  }
}

Header.propTypes = {
  currentUser: PropTypes.object,
  fetchCurrentUser: PropTypes.func.isRequired,
  logOutUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    currentUser: state.userAccount.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrentUser: () => dispatch(fetchCurrentUser()),
    logOutUser: () => dispatch(logOutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
