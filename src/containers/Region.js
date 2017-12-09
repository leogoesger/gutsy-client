import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {fetchRegion} from '../actions/region';
import Layout from '../components/climb/Layout';

export class Region extends React.Component {
  componentWillMount() {
    this.props.fetchRegion(this.props.match.params.id);
  }

  render() {
    return <Layout message={this.props.message} region={this.props.region} />;
  }
}

Region.propTypes = {
  region: PropTypes.object,
  message: PropTypes.string,
  fetchRegion: PropTypes.func,
  match: PropTypes.shape({params: PropTypes.shape({id: PropTypes.string})}),
};

const mapStateToProps = state => {
  return {
    region: state.region.region,
    message: state.region.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRegion: regionId => dispatch(fetchRegion(regionId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Region);
