import React from 'react';
import PropTypes from 'prop-types';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import Cart from 'material-ui/svg-icons/action/shopping-cart';

import Person from 'material-ui/svg-icons/social/person';
import Face from 'material-ui/svg-icons/action/face';
import Exit from 'material-ui/svg-icons/action/exit-to-app';
import Book from 'material-ui/svg-icons/action/book';
import Divider from 'material-ui/Divider';

import {Theme} from '../../../styles/Theme';
import {Colors} from '../../../styles/Colors';
import {Buttons} from '../../../styles/Buttons';
import {navigateTo} from '../../../utils/helpers';

export default class UserAction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {menuOpen: false};
  }

  _handleMenuStatus(status) {
    this.setState({menuOpen: status});
  }

  _renderMenuItem() {
    return (
      <div>
        <MenuItem
          value="1"
          primaryText="Profile"
          leftIcon={<Face />}
          onClick={() => navigateTo('/user')}
        />
        <MenuItem
          value="2"
          primaryText="My Books"
          leftIcon={<Book />}
          onClick={() => navigateTo('/user')}
        />
        <Divider />
        <MenuItem
          value="3"
          primaryText="Sign Out"
          leftIcon={<Exit />}
          onClick={() => this.props.logOutUser()}
        />
      </div>
    );
  }

  _renderCart(user) {
    let count = 0;
    user.books.forEach(book => {
      if (book.UserBook.userBookStatusId === 2) {
        count++;
      }
    });
    if (count) {
      return (
        <Badge
          badgeContent={count}
          secondary={true}
          badgeStyle={styles.badge}
          style={{padding: '0px', marginRight: '5px'}}
        >
          <IconButton style={{padding: '0px 0px 11px 5px'}}>
            <Cart color={Colors.white} style={{width: '6px', height: '6px'}} />
          </IconButton>
        </Badge>
      );
    }
    return null;
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div style={styles.userDiv}>
          {this._renderCart(this.props.currentUser)}
          <IconMenu
            anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
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
            {this._renderMenuItem()}
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
}

const styles = {
  userDiv: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '10px',
    lineHeight: '30px',
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
  badge: {
    top: 0,
    right: 0,
    fontSize: '9px',
    width: '18px',
    height: '18px',
    backgroundColor: Colors.orange,
  },
};

UserAction.propTypes = {
  currentUser: PropTypes.object,
  logOutUser: PropTypes.func.isRequired,
};
