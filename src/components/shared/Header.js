import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import Person from 'material-ui/svg-icons/social/person';

import {Theme} from '../../styles/Theme';
import {Colors} from '../../styles/Colors';
import {Buttons} from '../../styles/Buttons';
import {navigateTo} from '../../utils/helpers';

const Header = () => {
  return (
    <div style={styles.container}>
      <div style={styles.logo} onClick={() => navigateTo('/')}>
        <span style={{lineHeight: '60px'}}>{'Gutsy'}</span>
      </div>
      <div className="main-menu">
        <ul style={styles.headerList}>
          <li className="headerListItem" style={styles.headerListItem}>
            {'HOME'}
          </li>
          <li className="headerListItem" style={styles.headerListItem}>
            {'ABOUT'}
          </li>
          <li className="headerListItem" style={styles.headerListItem}>
            {'CLIMBS'}
          </li>
          <li className="headerListItem" style={styles.headerListItem}>
            {'BOOKS'}
          </li>
        </ul>
      </div>
      <div style={styles.userDiv}>
        <FlatButton
          className="e2e-header-sign-up-btn"
          label="Sign Up"
          style={Buttons.whiteButton}
          labelStyle={styles.headerWhiteButtonLabel}
          onClick={() => navigateTo('/signUp')}
        />
        <FlatButton
          label="Log In"
          className="loginBtn e2e-header-login-btn"
          labelPosition="after"
          icon={<Person />}
          style={styles.headerLogInButton}
          labelStyle={Buttons.buttonLabelSmaller}
          onClick={() => navigateTo('/login')}
        />
      </div>
    </div>
  );
};

const styles = {
  logo: {
    color: Colors.white,
    paddingLeft: '20px',
    cursor: 'pointer',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(50,50,50,1)',
    position: 'fixed',
    top: '0',
    width: '100%',
    height: '60px',
    borderBottom: '1px solid rgba(0,0,0,0.12)',
  },
  headerList: {
    textDecoration: 'none',
  },
  headerListItem: {
    listStyleType: 'none',
    display: 'inline',
    textDecoration: 'none',
    fontSize: Theme.bodyText,
    color: Colors.white,
  },
  userDiv: {
    width: '33.33%',
    textAlign: 'right',
    position: 'absolute',
    right: '0',
    top: '11px',
    paddingRight: '10px',
  },
  headerLogInButton: {
    color: Colors.white,
    height: '36px',
    borderRadius: Theme.buttonBorderRadius,
  },
  headerWhiteButtonLabel: {
    textTransform: 'none',
    fontSize: Theme.buttonLabelSmaller,
    padding: '5px 0px',
    color: Colors.white,
  },
};
Header.propTypes = {
  user: PropTypes.string,
};

export default Header;
