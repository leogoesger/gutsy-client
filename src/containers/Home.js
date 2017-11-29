import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Layout from '../components/home/Layout';

export class Home extends React.Component {
  render() {
    return <Layout user={this.props.user} />;
  }
}

Home.propTypes = {
  fetchCurrentUser: PropTypes.func.isRequired,
  user: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    user: state.userAccount.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrentUser: () => dispatch(),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
