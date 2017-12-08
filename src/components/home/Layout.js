import React from 'react';
import {debounce} from 'lodash';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Search from 'material-ui/svg-icons/action/search';

import {Styles} from '../../styles/Styles';
import {Colors} from '../../styles/Colors';
import Header from '../../containers/Header';
import RouteCard from './RouteCard';
import RegionCard from './RegionCard';
import AreaCard from './AreaCard';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
    this._debouncedSearch = debounce(
      () => this.props.fetchInfo(this.state.searchText),
      100
    );
  }

  _updateResults(searchText) {
    this.setState({searchText});
    this._debouncedSearch();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.props.currentUser} />
        <div style={{marginTop: '120px'}}>
          <div className="row" style={styles.searchBox}>
            <div className="col-xs-1">
              <div className="box">
                <Search style={styles.icon} color={Colors.darkPink} />
              </div>
            </div>
            <div className="col-xs-11">
              <div className="box">
                <TextField
                  style={{margin: '0 !important'}}
                  autoFocus={true}
                  floatingLabelText="Search for routes, areas, regions by name or description"
                  value={this.state.searchText}
                  onChange={(_event, value) => this._updateResults(value)}
                  underlineFocusStyle={styles.underlineFocusStyle}
                  underlineStyle={styles.underlineStyle}
                  floatingLabelStyle={styles.floatingLabelStyle}
                  inputStyle={styles.inputStyle}
                  floatingLabelFocusStyle={Styles.floatingLabelFocusStyle}
                  fullWidth={true}
                />
              </div>
            </div>
          </div>
          <RouteCard
            routes={this.props.routes}
            searchText={this.state.searchText}
          />
          <RegionCard
            regions={this.props.regions}
            searchText={this.state.searchText}
          />
          <AreaCard
            areas={this.props.areas}
            searchText={this.state.searchText}
          />
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  currentUser: PropTypes.object,
  fetchInfo: PropTypes.func.isRequired,
  routes: PropTypes.array,
  areas: PropTypes.array,
  regions: PropTypes.array,
};

const styles = {
  searchBox: {
    maxWidth: '1200px',
    margin: '20px auto',
    border: '1px solid #ddd',
    boxShadow: '2px 2px 2px #ddd',
    width: '75%',
  },
  buttonBox: {
    maxWidth: '1200px',
    margin: '20px auto',
  },
  icon: {
    width: 48,
    height: 48,
    margin: '20px 12px 12px',
  },
  floatingLabelStyle: {
    color: Colors.orange,
    lineHeight: '10px',
    fontSize: '14px',
    textTransform: 'Capitalize',
  },
  underlineStyle: {
    borderColor: Colors.orange,
  },
  underlineFocusStyle: {
    borderColor: Colors.orange,
  },
  inputStyle: {
    marginTop: '8px',
  },
};
