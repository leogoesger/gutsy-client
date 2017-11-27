import React from 'react';
import PropTypes from 'prop-types';

import Header from '../shared/Header';
import LoginCard from './LoginCard';

const Layout = props => {
  return (
    <div>
      <Header user={props.user} />
      <LoginCard fetchCurrentUser={props.fetchCurrentUser} />
    </div>
  );
};

Layout.propTypes = {
  fetchCurrentUser: PropTypes.func.isRequired,
  user: PropTypes.string,
};

export default Layout;
