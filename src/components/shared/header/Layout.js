import React from 'react';
import PropTypes from 'prop-types';

import {Theme} from '../../../styles/Theme';
import {Colors} from '../../../styles/Colors';
import {navigateTo} from '../../../utils/helpers';
import SearchBar from './SearchBar';
import UserAction from './UserAction';

export default class Layout extends React.Component {
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
            <div style={styles.navItem} onClick={() => navigateTo('/books')}>
              <span style={{lineHeight: '60px'}}>{'Books'}</span>
            </div>
          </div>
          <UserAction
            currentUser={this.props.currentUser}
            logOutUser={this.props.logOutUser}
          />
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
    zIndex: '99',
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
};

Layout.propTypes = {
  path: PropTypes.object,
  currentUser: PropTypes.object,
  logOutUser: PropTypes.func.isRequired,
  fetchInfo: PropTypes.func.isRequired,
  climbs: PropTypes.array,
  locations: PropTypes.array,
};
