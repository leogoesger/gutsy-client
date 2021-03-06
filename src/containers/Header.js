import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {concat, compact} from 'lodash';

import Layout from '../components/shared/header/Layout';
import {fetchCurrentUser, logOutUser} from '../actions/user-account';
import {fetchClimbs} from '../actions/climb';
import {fetchAreas} from '../actions/area';
import {fetchSubareas} from '../actions/subarea';
import {fetchRegions} from '../actions/region';
import {fetchSubregions} from '../actions/subregion';

class Header extends React.Component {
  constructor(props) {
    super(props);
    if (window.localStorage.gutsyJwt && !props.currentUser) {
      this.props.fetchCurrentUser();
    }
  }

  _fetchInfo(searchText) {
    this.props.fetchClimbs(searchText);
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
        path={this.props.path}
        currentUser={this.props.currentUser}
        logOutUser={() => this.props.logOutUser()}
        fetchInfo={searchText => this._fetchInfo(searchText)}
        climbs={this.props.climbs}
        locations={this._joinLocations()}
      />
    );
  }
}

Header.propTypes = {
  path: PropTypes.object,
  currentUser: PropTypes.object,
  fetchCurrentUser: PropTypes.func.isRequired,
  logOutUser: PropTypes.func.isRequired,
  climbs: PropTypes.array,
  areas: PropTypes.array,
  subareas: PropTypes.array,
  regions: PropTypes.array,
  subregions: PropTypes.array,
  fetchClimbs: PropTypes.func.isRequired,
  fetchAreas: PropTypes.func.isRequired,
  fetchSubareas: PropTypes.func.isRequired,
  fetchRegions: PropTypes.func.isRequired,
  fetchSubregions: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    currentUser: state.userAccount.currentUser,
    climbs: state.climb.climbs,
    regions: state.region.regions,
    subregions: state.subregion.subregions,
    areas: state.area.areas,
    subareas: state.subarea.subareas,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrentUser: () => dispatch(fetchCurrentUser()),
    logOutUser: () => dispatch(logOutUser()),
    fetchClimbs: searchText => dispatch(fetchClimbs(searchText)),
    fetchAreas: searchText => dispatch(fetchAreas(searchText)),
    fetchSubareas: searchText => dispatch(fetchSubareas(searchText)),
    fetchRegions: searchText => dispatch(fetchRegions(searchText)),
    fetchSubregions: searchText => dispatch(fetchSubregions(searchText)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
