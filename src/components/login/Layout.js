import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from 'material-ui/Snackbar';

import Header from '../../containers/Header';
import LoginCard from './LoginCard';
import {autoHideDuration} from '../../utils/constants';

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
        <Header user={this.props.user} />
        <LoginCard loginUser={userData => this.props.loginUser(userData)} />
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
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.string,
  message: PropTypes.string,
};
