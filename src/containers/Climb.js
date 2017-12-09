import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {fetchRoute} from '../actions/route';
import Layout from '../components/route/Layout';

export class Climb extends React.Component {
  render() {
    return <Layout message={this.props.message} route={this.props.route} />;
  }
}

Climb.propTypes = {
  route: PropTypes.object,
  message: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    route: state.route.route,
    message: state.route.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRoute: routeId => dispatch(fetchRoute(routeId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Climb);
