import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from 'material-ui/Snackbar';

import {autoHideDuration} from '../../utils/constants';
import RegionCard from './RegionCard';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMessage: false,
      message: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.message) {
      this.setState({
        showMessage: true,
        message: nextProps.message,
      });
    } else {
      this.setState({
        showMessage: false,
        message: '',
      });
    }
  }

  _handleMessageClose() {
    this.setState({showMessage: false, message: ''});
  }

  render() {
    return (
      <div>
        <RegionCard region={this.props.region} />
        <Snackbar
          style={{color: 'black'}}
          open={this.state.showMessage}
          action={'close'}
          onActionTouchTap={() => this._handleMessageClose()}
          message={this.state.message}
          autoHideDuration={autoHideDuration}
          onRequestClose={() => this._handleMessageClose()}
        />
      </div>
    );
  }
}

Layout.propTypes = {
  region: PropTypes.object,
  message: PropTypes.string,
};
