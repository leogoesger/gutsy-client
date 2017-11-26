import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardTitle, CardText} from 'material-ui/Card';

import {Buttons} from '../../styles/Buttons';
import {CardStyles} from '../../styles/Cards';
import UserDetailsForm from './UserDetailsForm';
import {navigateTo} from '../../utils/helpers';

export default class UserDetailsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
    };
  }
  _isFormComplete() {
    return true;
  }

  _isFormValid() {
    return true;
  }

  render() {
    return (
      <Card style={styles.mainCard}>
        <CardTitle
          style={{textAlign: 'left', padding: '0px'}}
          titleStyle={{
            fontSize: '36px',
            padding: '15px 0px',
          }}
          title="Sign Up"
          subtitle="Welcome, please enter your information below to get started. Please enter the name that is on your license."
          subtitleStyle={{
            width: '100%',
          }}
        />
        <CardText
          style={{
            textAlign: 'left',
            padding: '0px',
            width: '95%',
          }}
        >
          <UserDetailsForm />
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
                style={Buttons.linkButton}
                labelStyle={Buttons.buttonLabelLink}
                onClick={() => navigateTo('/login')}
              />
            </span>
            <FlatButton
              label="Sign Up"
              type="submit"
              style={
                this._isFormValid()
                  ? Buttons.whiteButton
                  : Buttons.disabledButton
              }
              disabled={!this._isFormValid()}
            />
          </div>
        </CardText>
      </Card>
    );
  }
}

UserDetailsCard.propTypes = {
  fetchCurrentUser: PropTypes.func.isRequired,
};

const styles = {
  formInvalid: {
    textAlign: 'left',
    display: 'block',
    fontSize: '12px',
    color: '#da176d',
    margin: '0px 0px 20px 0px',
  },
  mainCard: {
    ...CardStyles.mainCard,
    paddingLeft: '6px',
    maxWidth: '400px',
    overflow: 'visible',
  },
};
