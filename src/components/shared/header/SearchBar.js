import React from 'react';
import PropTypes from 'prop-types';
import {debounce, concat} from 'lodash';
import MenuItem from 'material-ui/MenuItem';
import AutoComplete from 'material-ui/AutoComplete';
import Search from 'material-ui/svg-icons/action/search';
import MapsPlace from 'material-ui/svg-icons/maps/place';
import MoodBad from 'material-ui/svg-icons/social/mood-bad';
import Terrain from 'material-ui/svg-icons/maps/terrain';

import {Colors} from '../../../styles/Colors';
import {navigateTo} from '../../../utils/helpers';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      searchResult: [],
    };
    this._debouncedSearch = debounce(
      () => this.props.fetchInfo(this.state.searchText),
      100
    );
  }

  componentWillReceiveProps(nextProps) {
    const climbs = nextProps.climbs;
    const locations = nextProps.locations;
    let searchResult = [];
    if (climbs && climbs.length) {
      climbs.forEach(climb => {
        searchResult = concat(searchResult, {
          text: climb.name,
          value: (
            <MenuItem
              primaryText={climb.name}
              leftIcon={<Terrain />}
              onClick={() => navigateTo(`/climbs/${climb.id}`)}
            />
          ),
        });
      });
      searchResult = concat(searchResult, {
        text: '-----------------------------------',
        value: '----',
      });
    }
    if (locations && locations.length) {
      locations.forEach(location => {
        searchResult = concat(searchResult, {
          text: location.name,
          value: (
            <MenuItem
              primaryText={location.name}
              leftIcon={<MapsPlace />}
              onClick={() => this._navigateToDetails(location)}
            />
          ),
        });
      });
    }
    if (!searchResult.length) {
      searchResult = concat(searchResult, {
        text: 'No Result Found',
        value: (
          <MenuItem primaryText="No Result Found..." leftIcon={<MoodBad />} />
        ),
      });
    }
    this.setState({
      searchResult,
    });
  }

  _navigateToDetails(location) {
    if (location.area) {
      navigateTo(`/subareas/${location.id}`);
    } else if (location.subregion) {
      navigateTo(`/areas/${location.id}`);
    } else if (location.region) {
      navigateTo(`/subregions/${location.id}`);
    } else {
      navigateTo(`/regions/${location.id}`);
    }
  }

  _updateResults(searchText) {
    this.setState({searchText});
    this._debouncedSearch();
  }

  _renderSearchBar() {
    if (this.props.path && this.props.path.pathname === '/') {
      return null;
    }
    return (
      <div style={styles.container}>
        <AutoComplete
          underlineStyle={{display: 'none'}}
          filter={AutoComplete.noFilter}
          dataSource={this.state.searchResult}
          style={styles.searchBar}
          hintText="Search"
          hintStyle={styles.hint}
          inputStyle={{height: '30px', color: '#DFE0E1', paddingLeft: '10px'}}
          onUpdateInput={value => this._updateResults(value)}
        />
        <Search style={styles.icon} />
      </div>
    );
  }

  render() {
    return this._renderSearchBar();
  }
}

SearchBar.propTypes = {
  path: PropTypes.object,
  fetchInfo: PropTypes.func.isRequired,
  climbs: PropTypes.array,
  locations: PropTypes.array,
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    marginLeft: '-30px',
    color: 'white',
    zIndex: '2',
    width: '25px',
    height: '25px',
  },
  searchBar: {
    marginLeft: '20px',
    backgroundColor: Colors.offBlack,
    opacity: '1',
    borderRadius: '4px',
    height: '30px',
    width: '200px',
  },
  hint: {
    height: '32px',
    paddingLeft: '12px',
    color: Colors.offWhite,
    fontSize: '14px',
  },
};
