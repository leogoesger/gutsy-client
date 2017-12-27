import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';

export default class ClimbInfoIcons extends React.Component {
  _renderIcons(icons) {
    return icons.map((icon, index) => {
      return (
        <IconButton
          style={{width: '36px', padding: '0px', textAlign: 'left'}}
          key={index}
          tooltip={icon}
          tooltipPosition="bottom-center"
        >
          <img
            className="climbInfoIcon"
            src={`../../static-data/images/${icon}.svg`}
            data-tip={icon}
          />
        </IconButton>
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
