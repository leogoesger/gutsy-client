import React from 'react';
import PropTypes from 'prop-types';

export default class ClimbInfoIcons extends React.Component {
  _renderIcons(icons) {
    return icons.map((icon, index) => {
      return (
        <img
          key={index}
          className="climbInfoIcon"
          src={`../../static-data/images/${icon}.svg`}
          title={icon}
        />
      );
    });
  }

  render() {
    if (this.props.climb.icons && this.props.climb.icons.length) {
      return (
        <div style={{marginTop: '15px'}}>
          {this._renderIcons(this.props.climb.icons)}
        </div>
      );
    }
    return null;
  }
}

ClimbInfoIcons.propTypes = {
  climb: PropTypes.object,
};
