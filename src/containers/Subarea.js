import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {fetchSubarea} from '../actions/subarea';
import Layout from '../components/climb/Layout';

export class Subarea extends React.Component {
  componentWillMount() {
    this.props.fetchSubarea(this.props.match.params.id);
  }

  render() {
    return <Layout message={this.props.message} subarea={this.props.subarea} />;
  }
}

Subarea.propTypes = {
  subarea: PropTypes.object,
  message: PropTypes.string,
  fetchSubarea: PropTypes.func,
  match: PropTypes.shape({params: PropTypes.shape({id: PropTypes.string})}),
};

const mapStateToProps = state => {
  return {
    subarea: state.subarea.subarea,
    message: state.subarea.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSubarea: subareaId => dispatch(fetchSubarea(subareaId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Subarea);
