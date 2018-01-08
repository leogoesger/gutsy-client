import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardTitle, CardText} from 'material-ui/Card';

import {Buttons} from '../../../styles/Buttons';
import {CardStyles} from '../../../styles/Cards';
import {Colors} from '../../../styles/Colors';
import LoginForm from '../../login/LoginForm';
import {validateEmail, validatePassword} from '../../../utils/helpers';

export default class LoginCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        email: '',
        password: '',
      },
    };
  }

  _handleUserDataChange(value, property) {
    const {userData} = this.state;
    userData[property] = value;
    this.setState({
      userData,
    });
  }

  _isFormComplete() {
    return Boolean(this.state.userData.email && this.state.userData.password);
  }

  _isFormValid() {
    if (!this._isFormComplete()) {
      return false;
    }
    return Boolean(
      validateEmail(this.state.userData.email) &&
        validatePassword(this.state.userData.password)
    );
  }

  render() {
    if (this.props.signUpForm) {
      return null;
    }
    return (
      <Card style={styles.mainCard}>
        <CardTitle
          style={{
            textAlign: 'left',
            padding: '0px',
            marginBottom: '10px',
            width: '100%',
          }}
          titleStyle={{
            fontSize: '36px',
            padding: '15px 0px',
          }}
          title="Log In"
          subtitle="Already using Gutsy, log in and climb on!"
          subtitleStyle={{
            width: '100%',
          }}
        />
        <CardText
          style={{
            textAlign: 'left',
            padding: '0px',
            minWidth: '400px',
          }}
        >
          <LoginForm
            handleUserDataChange={(value, property) =>
              this._handleUserDataChange(value, property)
            }
          />
          <div
            style={{
              textAlign: 'right',
              clear: 'left',
              marginTop: '20px',
            }}
          >
            <span style={{float: 'left'}}>
              <FlatButton
                className="linkButton"
                label="Sign Up"
                style={styles.linkButton}
                labelStyle={Buttons.buttonLabelLink}
                onClick={() => this.props.toggleForm()}
              />
            </span>
            <FlatButton
              label="Log In"
              type="submit"
              style={
                this._isFormValid()
                  ? Buttons.orangeButton
                  : Buttons.disabledButton
              }
              labelStyle={Buttons.orangeButtonLabel}
              disabled={!this._isFormValid()}
              onClick={() => this.props.loginUser(this.state.userData)}
            />
          </div>
        </CardText>
      </Card>
    );
  }
}

LoginCard.propTypes = {
  signUpForm: PropTypes.bool,
  toggleForm: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
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
    padding: '20px 6px',
    maxWidth: '400px',
    overflow: 'visible',
  },
  linkButton: {
    ...Buttons.linkButton,
    textAlign: 'left',
  },
};
