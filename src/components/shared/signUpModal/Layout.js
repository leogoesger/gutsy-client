import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from 'material-ui/Snackbar';
import Dialog from 'material-ui/Dialog';

import UserDetailCard from './UserDetailCard';
import LoginCard from './LoginCard';
import {autoHideDuration} from '../../../utils/constants';
import {Colors} from '../../../styles/Colors';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpForm: true,
      showMessage: false,
      message: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signUpErrorMessage) {
      this.setState({
        showMessage: true,
        message: nextProps.signUpErrorMessage,
      });
    } else if (nextProps.loginErrorMessage) {
      this.setState({
        showMessage: true,
        message: nextProps.loginErrorMessage,
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

  _toggleForm() {
    this.setState({signUpForm: !this.state.signUpForm});
  }

  render() {
    return (
      <div>
        <Dialog
          modal={false}
          open={this.props.dialogOpen}
          onRequestClose={() => this.props.toggleDialog()}
          autoDetectWindowHeight={true}
          autoScrollBodyContent={true}
          contentStyle={styles.dialogInner}
          bodyStyle={styles.dialog}
          bodyClassName="dialogBox"
          contentClassName="dialogBoxContent"
        >
          <UserDetailCard
            toggleDialog={() => this.props.toggleDialog()}
            signUpForm={this.state.signUpForm}
            signUpUser={userData => this.props.signUpUser(userData)}
            toggleForm={() => this._toggleForm()}
          />
          <LoginCard
            toggleDialog={() => this.props.toggleDialog()}
            signUpForm={this.state.signUpForm}
            loginUser={userData => this.props.loginUser(userData)}
            toggleForm={() => this._toggleForm()}
          />
        </Dialog>
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
  toggleDialog: PropTypes.func.isRequired,
  signUpUser: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  dialogOpen: PropTypes.bool,
  signUpErrorMessage: PropTypes.string,
  loginErrorMessage: PropTypes.string,
};

const styles = {
  dialog: {
    backgroundColor: Colors.lightGreyPaper,
    maxHeight: '666px',
    padding: 'auto',
  },
  dialogInner: {
    width: 'auto',
    maxWidth: '560px',
    margin: '0 auto',
  },
};
