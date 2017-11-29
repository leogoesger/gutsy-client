import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {fetchCurrentUser, logOutUser} from '../actions/user-account';
import Layout from '../components/shared/header/Layout';

class Header extends React.Component {
  constructor(props) {
    super(props);
    if (window.localStorage.gutsyJwt && !props.user) {
      this.props.fetchCurrentUser();
    }
  }

  render() {
    return (
      <Layout
        user={this.props.user}
        logOutUser={() => this.props.logOutUser()}
      />
    );
  }
}

Header.propTypes = {
  user: PropTypes.string,
  fetchCurrentUser: PropTypes.func.isRequired,
  logOutUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    user: state.userAccount.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrentUser: () => dispatch(fetchCurrentUser()),
    logOutUser: () => dispatch(logOutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
