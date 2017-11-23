import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchCurrentUser} from '../actions/home';

import Layout from '../components/home/Layout';

export class Home extends React.Component {
  _fetchCurrentUser() {
    this.props.fetchCurrentUser();
  }
  render() {
    return (
      <Layout
        user={this.props.user}
        fetchCurrentUser={() => this._fetchCurrentUser()}
      />
    );
  }
}

Home.propTypes = {
  fetchCurrentUser: PropTypes.func.isRequired,
  user: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    user: state.home.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrentUser: () => dispatch(fetchCurrentUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
