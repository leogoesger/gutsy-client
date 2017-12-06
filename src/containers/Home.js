import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {fetchRoutes} from '../actions/route';
import {fetchAreas} from '../actions/area';
import {fetchRegions} from '../actions/region';

import Layout from '../components/home/Layout';

export class Home extends React.Component {
  _fetchInfo(searchText) {
    this.props.fetchRoutes(searchText);
    this.props.fetchAreas(searchText);
    this.props.fetchRegions(searchText);
  }

  render() {
    return (
      <Layout
        currentUser={this.props.currentUser}
        fetchInfo={searchText => this._fetchInfo(searchText)}
        routes={this.props.routes}
        regions={this.props.regions}
        areas={this.props.areas}
      />
    );
  }
}

Home.propTypes = {
  currentUser: PropTypes.object,
  routes: PropTypes.array,
  areas: PropTypes.array,
  regions: PropTypes.array,
  fetchRoutes: PropTypes.func.isRequired,
  fetchAreas: PropTypes.func.isRequired,
  fetchRegions: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    routes: state.route.routes,
    regions: state.region.regions,
    areas: state.area.areas,
    currentUser: state.userAccount.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRoutes: searchText => dispatch(fetchRoutes(searchText)),
    fetchAreas: searchText => dispatch(fetchAreas(searchText)),
    fetchRegions: searchText => dispatch(fetchRegions(searchText)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
