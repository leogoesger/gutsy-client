import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {fetchSubregion} from '../actions/subregion';
import Layout from '../components/subregion/Layout';

export class Subregion extends React.Component {
  componentWillMount() {
    this.props.fetchSubregion(this.props.match.params.id);
  }

  render() {
    return (
      <Layout message={this.props.message} subregion={this.props.subregion} />
    );
  }
}

Subregion.propTypes = {
  subregion: PropTypes.object,
  message: PropTypes.string,
  fetchSubregion: PropTypes.func,
  match: PropTypes.shape({params: PropTypes.shape({id: PropTypes.string})}),
};

const mapStateToProps = state => {
  return {
    subregion: state.subregion.subregion,
    message: state.subregion.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSubregion: subregionId => dispatch(fetchSubregion(subregionId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Subregion);
