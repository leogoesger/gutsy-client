import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';

import Header from '../../containers/Header';
const Layout = props => {
  return (
    <div>
      <Header user={props.user} />
      <div style={{paddingTop: '60px', paddingLeft: '60px'}}>
        <h2 className="alt-header">About</h2>
        <p>
          This example app is part of the $$$$$$$$$ {props.user}
          <a href="https://github.com/coryhouse/react-slingshot">
            React-Slngshot starter kit
          </a>
        </p>
        <FlatButton label="Default" />
      </div>
    </div>
  );
};

Layout.propTypes = {
  user: PropTypes.string,
};

export default Layout;
