import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchCurrentUser} from '../actions/home';

import Layout from '../components/page-not-found/Layout';

export class PageNotFound extends React.Component {
  render() {
    return <Layout />;
  }
}

PageNotFound.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(PageNotFound);
