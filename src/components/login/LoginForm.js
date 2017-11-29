import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

import {Styles} from '../../styles/Styles';
import {
  getEmailErrorMessage,
  getPasswordErrorMessage,
} from '../../utils/helpers';

export default class UserDetailsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  _handleChange(value, property) {
    this.setState({
      [property]: value,
    });
    this.props.handleUserDataChange(value, property);
  }

  render() {
    return (
      <div style={{width: '100%'}}>
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
      </div>
    );
  }
}

UserDetailsForm.propTypes = {
  handleUserDataChange: PropTypes.func.isRequired,
};
