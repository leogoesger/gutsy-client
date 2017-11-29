import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Layout from '../components/home/Layout';

export class Home extends React.Component {
  render() {
    return <Layout currentUser={this.props.currentUser} />;
  }
}

Home.propTypes = {
  currentUser: PropTypes.object,
  fetchCurrentUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    currentUser: state.userAccount.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrentUser: () => dispatch(),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
