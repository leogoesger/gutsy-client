import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchCurrentUser} from '../actions/home';

import Layout from '../components/home/Layout';

export class Home extends React.Component {
  render() {
    return <Layout />;
  }
}

Home.propTypes = {
  fetchCurrentUser: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCurrentUser: bindActionCreators(fetchCurrentUser, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);