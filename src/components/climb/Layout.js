import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../containers/Header';
import ClimbCard from './ClimbCard';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ClimbCard climb={this.props.climb} />
      </div>
    );
  }
}

Layout.propTypes = {
  climb: PropTypes.object,
};
