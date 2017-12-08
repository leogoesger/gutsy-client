import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {concat, compact} from 'lodash';

import {fetchRoutes} from '../actions/route';
import {fetchAreas} from '../actions/area';
import {fetchSubareas} from '../actions/subarea';
import {fetchRegions} from '../actions/region';
import {fetchSubregions} from '../actions/subregion';

import Layout from '../components/home/Layout';

export class Home extends React.Component {
  _fetchInfo(searchText) {
    this.props.fetchRoutes(searchText);
    this.props.fetchAreas(searchText);
    this.props.fetchSubareas(searchText);
    this.props.fetchRegions(searchText);
    this.props.fetchSubregions(searchText);
  }

  _joinLocations() {
    return compact(
      concat(
        this.props.regions,
        this.props.subregions,
        this.props.areas,
        this.props.subareas
      )
    );
  }

  render() {
    return (
      <Layout
        currentUser={this.props.currentUser}
        fetchInfo={searchText => this._fetchInfo(searchText)}
        routes={this.props.routes}
        locationInfo={this._joinLocations()}
        regions={this.props.regions}
        subregions={this.props.subregions}
        areas={this.props.areas}
        subareas={this.props.subareas}
      />
    );
  }
}

Home.propTypes = {
  currentUser: PropTypes.object,
  routes: PropTypes.array,
  areas: PropTypes.array,
  subareas: PropTypes.array,
  regions: PropTypes.array,
  subregions: PropTypes.array,
  fetchRoutes: PropTypes.func.isRequired,
  fetchAreas: PropTypes.func.isRequired,
  fetchSubareas: PropTypes.func.isRequired,
  fetchRegions: PropTypes.func.isRequired,
  fetchSubregions: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    routes: state.route.routes,
    regions: state.region.regions,
    subregions: state.subregion.subregions,
    areas: state.area.areas,
    subareas: state.subarea.subareas,
    currentUser: state.userAccount.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRoutes: searchText => dispatch(fetchRoutes(searchText)),
    fetchAreas: searchText => dispatch(fetchAreas(searchText)),
    fetchSubareas: searchText => dispatch(fetchSubareas(searchText)),
    fetchRegions: searchText => dispatch(fetchRegions(searchText)),
    fetchSubregions: searchText => dispatch(fetchSubregions(searchText)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
