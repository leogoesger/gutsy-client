import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {fetchArea} from '../actions/area';
import Layout from '../components/area/Layout';

export class Area extends React.Component {
  componentWillMount() {
    this.props.fetchArea(this.props.match.params.id);
  }

  render() {
    return <Layout message={this.props.message} area={this.props.area} />;
  }
}

Area.propTypes = {
  area: PropTypes.object,
  message: PropTypes.string,
  fetchArea: PropTypes.func,
  match: PropTypes.shape({params: PropTypes.shape({id: PropTypes.string})}),
};

const mapStateToProps = state => {
  return {
    area: state.area.area,
    message: state.area.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArea: areaId => dispatch(fetchArea(areaId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Area);
