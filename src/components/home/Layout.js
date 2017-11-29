import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../containers/Header';
const Layout = props => {
  return (
    <div>
      <Header user={props.currentUser} />
      <div style={{paddingTop: '60px', paddingLeft: '60px'}}>
        <h2 className="alt-header">Gutsy Home</h2>
        <p>
          Welcome,
          {props.currentUser ? props.currentUser.firstName : 'Please Login'}!
        </p>
      </div>
    </div>
  );
};

Layout.propTypes = {
  currentUser: PropTypes.object,
};

export default Layout;
