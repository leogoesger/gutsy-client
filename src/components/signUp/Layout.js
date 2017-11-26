import React from 'react';
import PropTypes from 'prop-types';

import Header from '../shared/Header';
import UserDetailCard from './UserDetailCard';

const Layout = props => {
  return (
    <div>
      <Header user={props.user} />
      <UserDetailCard fetchCurrentUser={props.fetchCurrentUser} />
    </div>
  );
};

Layout.propTypes = {
  fetchCurrentUser: PropTypes.func.isRequired,
  user: PropTypes.string,
};

export default Layout;
