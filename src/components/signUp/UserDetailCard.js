import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardTitle, CardText} from 'material-ui/Card';

import {Buttons} from '../../styles/Buttons';
import {CardStyles} from '../../styles/Cards';
import {Colors} from '../../styles/Colors';
import UserDetailsForm from './UserDetailsForm';
import {
  navigateTo,
  capitalize,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from '../../utils/helpers';

export default class UserDetailsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
      confirmPassword: '',
    };
  }

  _handleUserDataChange(value, property) {
    const {userData} = this.state;
    if (property === 'firstName' || property === 'lastName') {
      userData[property] = capitalize(value);
    } else {
      userData[property] = value;
    }
    this.setState({
      userData,
    });
  }

  _handleConfirmPasswordChange(value) {
    this.setState({confirmPassword: value});
  }

  _isFormComplete() {
    return Boolean(
      this.state.userData.firstName &&
        this.state.userData.lastName &&
        this.state.userData.email &&
        this.state.userData.password &&
        this.state.confirmPassword
    );
  }

  _isFormValid() {
    if (!this._isFormComplete()) {
      return false;
    }
    return Boolean(
      validateEmail(this.state.userData.email) &&
        validatePassword(this.state.userData.password) &&
        validateConfirmPassword(
          this.state.userData.password,
          this.state.confirmPassword
        )
    );
  }

  render() {
    return (
      <Card style={styles.mainCard}>
        <CardTitle
          style={{textAlign: 'left', padding: '0px', marginBottom: '10px'}}
          titleStyle={{
            fontSize: '36px',
            padding: '15px 0px',
          }}
          title="Sign Up"
          subtitle="Welcome, please enter your information below to get started."
          subtitleStyle={{
            width: '100%',
          }}
        />
        <CardText
          style={{
            textAlign: 'left',
            padding: '0px',
            width: '100%',
          }}
        >
          <UserDetailsForm
            handleUserDataChange={(value, property) =>
              this._handleUserDataChange(value, property)}
            handleConfirmPasswordChange={value =>
              this._handleConfirmPasswordChange(value)}
          />
          <div
            style={{
              textAlign: 'right',
              clear: 'left',
              marginTop: '20px',
            }}
          >
            <p
              style={
                this._isFormComplete() ? {display: 'none'} : styles.formInvalid
              }
            >
              {'Please fill all the required (*) fields.'}
            </p>
            <span style={{float: 'left'}}>
              <FlatButton
                className="linkButton"
                label="Log In"
                style={styles.linkButton}
                labelStyle={Buttons.buttonLabelLink}
                onClick={() => navigateTo('/login')}
              />
            </span>
            <FlatButton
              label="Sign Up"
              type="submit"
              style={
                this._isFormValid()
                  ? Buttons.orangeButton
                  : Buttons.disabledButton
              }
              labelStyle={Buttons.orangeButtonLabel}
              disabled={!this._isFormValid()}
              onClick={() => this.props.signUpUser(this.state.userData)}
            />
          </div>
        </CardText>
      </Card>
    );
  }
}

UserDetailsCard.propTypes = {
  signUpUser: PropTypes.func.isRequired,
};

const styles = {
  formInvalid: {
    textAlign: 'left',
    display: 'block',
    fontSize: '12px',
    color: Colors.orange,
    margin: '0px 0px 20px 0px',
  },
  mainCard: {
    ...CardStyles.mainCard,
    paddingLeft: '6px',
    maxWidth: '400px',
    overflow: 'visible',
  },
  linkButton: {
    ...Buttons.linkButton,
    textAlign: 'left',
  },
};
