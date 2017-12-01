import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {fetchRoutes} from '../actions/route';
import Layout from '../components/home/Layout';

export class Home extends React.Component {
  render() {
    return (
      <Layout
        currentUser={this.props.currentUser}
        fetchRoutes={searchText => this.props.fetchRoutes(searchText)}
        routes={this.props.routes}
      />
    );
  }
}

Home.propTypes = {
  currentUser: PropTypes.object,
  routes: PropTypes.array,
  fetchRoutes: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    routes: state.route.routes,
    currentUser: state.userAccount.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRoutes: searchText => dispatch(fetchRoutes(searchText)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
