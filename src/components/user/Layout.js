import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from 'material-ui/Snackbar';

import {autoHideDuration} from '../../utils/constants';
import UserCard from './UserCard';

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
        <UserCard currentUser={this.props.currentUser} />
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
  currentUser: PropTypes.object,
  message: PropTypes.string,
};
