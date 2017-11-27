import React from 'react';
import PropTypes from 'prop-types';

import Header from '../shared/Header';
import UserDetailCard from './UserDetailCard';

const Layout = props => {
  return (
    <div>
      <Header user={props.user} />
      <UserDetailCard signUpUser={userData => props.signUpUser(userData)} />
    </div>
  );
};

Layout.propTypes = {
  signUpUser: PropTypes.func.isRequired,
  user: PropTypes.string,
};

export default Layout;
