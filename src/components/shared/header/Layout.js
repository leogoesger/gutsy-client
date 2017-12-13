import React from 'react';
import PropTypes from 'prop-types';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Person from 'material-ui/svg-icons/social/person';

import {Theme} from '../../../styles/Theme';
import {Colors} from '../../../styles/Colors';
import {Buttons} from '../../../styles/Buttons';
import {navigateTo} from '../../../utils/helpers';
import SearchBar from './SearchBar';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {menuOpen: false};
  }

  _handleMenuStatus(status) {
    this.setState({menuOpen: status});
  }

  _renderUserAction() {
    if (this.props.currentUser) {
      return (
        <div style={styles.userDiv}>
          <IconMenu
            iconButtonElement={
              <FlatButton
                label={this.props.currentUser.firstName}
                className="e2e-header-login-btn"
                labelPosition="after"
                icon={<Person />}
                style={styles.headerButton}
                labelStyle={Buttons.buttonLabelSize}
                onClick={() => this._handleMenuStatus(true)}
              />
            }
            open={this.state.menuOpen}
            onRequestChange={() => this._handleMenuStatus(false)}
          >
            <MenuItem
              value="1"
              primaryText="My Profile"
              onClick={() => navigateTo('/user')}
            />
            <MenuItem
              value="2"
              primaryText="Sign Out"
              onClick={() => this.props.logOutUser()}
            />
          </IconMenu>
        </div>
      );
    } else {
      return (
        <div style={styles.userDiv}>
          <FlatButton
            className="e2e-header-sign-up-btn"
            label="Sign Up"
            style={styles.headerButton}
            labelStyle={styles.headerWhiteButtonLabel}
            onClick={() => navigateTo('/signUp')}
          />
          <FlatButton
            label="Log In"
            className="e2e-header-login-btn"
            labelPosition="after"
            icon={<Person />}
            style={styles.headerButton}
            labelStyle={styles.headerWhiteButtonLabel}
            onClick={() => navigateTo('/login')}
          />
        </div>
      );
    }
  }

  render() {
    return (
      <div style={styles.nav}>
        <div style={styles.container}>
          <div className="row" style={{margin: '0px'}}>
            <div style={styles.logo} onClick={() => navigateTo('/')}>
              <span style={{lineHeight: '55px'}}>{'Gutsy'}</span>
            </div>
            <SearchBar
              path={this.props.path}
              climbs={this.props.climbs}
              locations={this.props.locations}
              fetchInfo={searchText => this.props.fetchInfo(searchText)}
            />
            <div style={styles.navItem} onClick={() => navigateTo('/')}>
              <span style={{lineHeight: '60px'}}>{'Climbs'}</span>
            </div>
            <div style={styles.navItem} onClick={() => navigateTo('/')}>
              <span style={{lineHeight: '60px'}}>{'Books'}</span>
            </div>
          </div>
          {this._renderUserAction()}
        </div>
      </div>
    );
  }
}

const styles = {
  nav: {
    backgroundColor: 'rgba(50,50,50,1)',
    position: 'fixed',
    top: '0',
    width: '100%',
    height: '60px',
    borderBottom: '1px solid rgba(0,0,0,0.12)',
    zIndex: '2',
  },
  container: {
    margin: '0 auto',
    width: '80%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  logo: {
    fontFamily: 'Comic Sans MS',
    color: Colors.orange,
    fontSize: '22px',
    cursor: 'pointer',
  },
  navItem: {
    marginLeft: '20px',
    fontSize: Theme.buttonLabelSmall,
    color: Colors.white,
    cursor: 'pointer',
  },
  userDiv: {
    lineHeight: '60px',
  },
  headerButton: {
    color: Colors.white,
    height: '36px',
    borderRadius: Theme.buttonBorderRadius,
  },
  headerWhiteButtonLabel: {
    marginLeft: '2px',
    marginRight: '5px',
    textTransform: 'none',
    fontSize: Theme.buttonLabelSmall,
    padding: '5px 0px',
    color: Colors.white,
  },
};

Layout.propTypes = {
  path: PropTypes.object,
  currentUser: PropTypes.object,
  logOutUser: PropTypes.func.isRequired,
  fetchInfo: PropTypes.func.isRequired,
  climbs: PropTypes.array,
  locations: PropTypes.array,
};
