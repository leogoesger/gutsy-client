import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {fetchClimb} from '../actions/climb';
import Layout from '../components/climb/Layout';

export class Climb extends React.Component {
  componentWillMount() {
    this.props.fetchClimb(this.props.match.params.id);
  }

  render() {
    return <Layout message={this.props.message} climb={this.props.climb} />;
  }
}

Climb.propTypes = {
  climb: PropTypes.object,
  message: PropTypes.string,
  fetchClimb: PropTypes.func,
  match: PropTypes.shape({params: PropTypes.shape({id: PropTypes.string})}),
};

const mapStateToProps = state => {
  return {
    climb: state.climb.climb,
    message: state.climb.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchClimb: climbId => dispatch(fetchClimb(climbId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Climb);
