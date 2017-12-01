import React from 'react';
import {debounce} from 'lodash';
import PropTypes from 'prop-types';
import Highlight from 'react-highlighter';
import TextField from 'material-ui/TextField';
import Search from 'material-ui/svg-icons/action/search';

import {Styles} from '../../styles/Styles';
import {Colors} from '../../styles/Colors';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import {navigateTo} from '../../utils/helpers';

import Header from '../../containers/Header';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
    this._debouncedSearch = debounce(
      () => this.props.fetchRoutes(this.state.searchText),
      300
    );
  }

  _updateResults(searchText) {
    this.setState({searchText});
    this._debouncedSearch();
  }

  _navigateToDetails(routeId) {
    navigateTo(`/routes/${routeId}`);
  }

  _renderTable(routes) {
    if (routes && routes.length) {
      return (
        <div className="table-div" style={{width: '75%'}}>
          <Table
            selectable={false}
            fixedHeader={true}
            height={routes.length > 12 ? '560px' : null}
            onCellClick={rowNumber =>
              this._navigateToDetails(routes[rowNumber].id)}
          >
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn style={{width: '20%'}}>
                  {'Name'}
                </TableHeaderColumn>
                <TableHeaderColumn style={{width: '20%'}}>
                  {'Grade'}
                </TableHeaderColumn>
                <TableHeaderColumn style={{width: '20%'}}>
                  {'Location'}
                </TableHeaderColumn>
                <TableHeaderColumn style={{width: '40%'}}>
                  {'Description'}
                </TableHeaderColumn>
              </TableRow>
            </TableHeader>
            {this._renderCustomersList(routes)}
          </Table>
        </div>
      );
    }
    return null;
  }

  _renderCustomersList(routes) {
    return (
      <TableBody displayRowCheckbox={false} showRowHover={true}>
        {this._renderListItems(routes)}
      </TableBody>
    );
  }

  _renderDescription(route) {
    if (!route.description) {
      return 'No available description';
    }
    return (
      <Highlight matchElement={'span'} search={this.state.searchText}>
        {route.description}
      </Highlight>
    );
  }

  _renderListItems(routes) {
    return routes.map(route => {
      return (
        <TableRow rowNumber={route.id} key={route.id}>
          <TableRowColumn style={{width: '20%'}}>
            <Highlight matchElement={'span'} search={this.state.searchText}>
              {route.name}
            </Highlight>
          </TableRowColumn>
          <TableRowColumn style={{width: '20%'}}>
            {`${route.grade}`}
          </TableRowColumn>
          <TableRowColumn style={{width: '20%'}}>
            {'Bishop Town'}
          </TableRowColumn>
          <TableRowColumn style={{width: '40%'}}>
            {this._renderDescription(route)}
          </TableRowColumn>
        </TableRow>
      );
    });
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
          {this._renderTable(this.props.routes)}
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  currentUser: PropTypes.object,
  routes: PropTypes.array,
  fetchRoutes: PropTypes.func.isRequired,
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
