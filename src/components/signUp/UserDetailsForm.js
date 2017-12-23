import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

import {Styles} from '../../styles/Styles';
import {
  getEmailErrorMessage,
  getPasswordErrorMessage,
  getConfirmPasswordErrorMessage,
} from '../../utils/helpers';

export default class UserDetailsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  _handleChange(value, property) {
    this.setState({
      [property]: value,
    });
    if (property === 'confirmPassword') {
      this.props.handleConfirmPasswordChange(value);
    } else {
      this.props.handleUserDataChange(value, property);
    }
  }

  render() {
    return (
      <div>
        <TextField
          className="requiredField"
          value={this.state.firstName}
          inputStyle={{textTransform: 'capitalize'}}
          floatingLabelText="First Name"
          underlineFocusStyle={Styles.underlineFocusStyle}
          floatingLabelStyle={Styles.floatingLabelStyle}
          floatingLabelFocusStyle={Styles.floatingLabelFocusStyle}
          onChange={(_event, value) => this._handleChange(value, 'firstName')}
          fullWidth={true}
        />
        <br />
        <TextField
          className="requiredField"
          value={this.state.lastName}
          fullWidth={true}
          floatingLabelText="Last Name"
          inputStyle={{textTransform: 'capitalize'}}
          underlineFocusStyle={Styles.underlineFocusStyle}
          floatingLabelStyle={Styles.floatingLabelStyle}
          floatingLabelFocusStyle={Styles.floatingLabelFocusStyle}
          onChange={(_event, value) => this._handleChange(value, 'lastName')}
        />
        <br />
        <TextField
          className="requiredField"
          value={this.state.email}
          fullWidth={true}
          floatingLabelText="Email"
          errorText={getEmailErrorMessage(this.state.email)}
          errorStyle={{textAlign: 'left'}}
          underlineFocusStyle={Styles.underlineFocusStyle}
          floatingLabelStyle={Styles.floatingLabelStyle}
          floatingLabelFocusStyle={Styles.floatingLabelFocusStyle}
          onChange={(_event, value) => this._handleChange(value, 'email')}
        />
        <br />
        <TextField
          className="requiredField"
          value={this.state.password}
          type="password"
          fullWidth={true}
          floatingLabelText="Password"
          errorText={getPasswordErrorMessage(this.state.password)}
          errorStyle={{textAlign: 'left'}}
          underlineFocusStyle={Styles.underlineFocusStyle}
          floatingLabelStyle={Styles.floatingLabelStyle}
          floatingLabelFocusStyle={Styles.floatingLabelFocusStyle}
          onChange={(_event, value) => this._handleChange(value, 'password')}
        />
        <br />
        <TextField
          className="requiredField"
          value={this.state.confirmPassword}
          type="password"
          fullWidth={true}
          floatingLabelText="Confirm Password"
          errorText={getConfirmPasswordErrorMessage(
            this.state.password,
            this.state.confirmPassword
          )}
          errorStyle={{textAlign: 'left'}}
          underlineFocusStyle={Styles.underlineFocusStyle}
          floatingLabelStyle={Styles.floatingLabelStyle}
          floatingLabelFocusStyle={Styles.floatingLabelFocusStyle}
          onChange={(_event, value) =>
            this._handleChange(value, 'confirmPassword')}
        />
      </div>
    );
  }
}

UserDetailsForm.propTypes = {
  handleUserDataChange: PropTypes.func.isRequired,
  handleConfirmPasswordChange: PropTypes.func.isRequired,
};
