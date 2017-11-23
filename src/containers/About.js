import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchCurrentUser} from '../actions/home';

import Layout from '../components/home/Layout';

export class About extends React.Component {
  render() {
    return <Layout />;
  }
}

About.propTypes = {
  fetchCurrentUser: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
