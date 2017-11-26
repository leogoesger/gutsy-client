import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';

import Header from '../shared/Header';

const Layout = props => {
  function _fetchCurrentUser() {
    props.fetchCurrentUser();
  }
  return (
    <div>
      <Header user={props.user} />
      <div style={{paddingTop: '60px', paddingLeft: '60px'}}>
        <h2 className="alt-header">Login</h2>
        <p>
          This example app is part of the $$$$$$$$$ {props.user}
          <a href="https://github.com/coryhouse/react-slingshot">
            React-Slngshot starter kit
          </a>
        </p>
        <FlatButton label="Default" onClick={() => _fetchCurrentUser()} />{' '}
      </div>
    </div>
  );
};

Layout.propTypes = {
  fetchCurrentUser: PropTypes.func.isRequired,
  user: PropTypes.string,
};

export default Layout;
