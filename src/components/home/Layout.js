import React from 'react';
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

import Header from '../../containers/Header';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }
  _renderTable(customers) {
    if (customers && customers.length) {
      return (
        <div className="table-div">
          <Table
            selectable={false}
            fixedHeader={true}
            height={customers.length > 12 ? '560px' : null}
            onCellClick={rowNumber =>
              this._navigateToDetails(customers[rowNumber].id)}
          >
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn style={{width: '20%'}}>
                  {'Name'}
                </TableHeaderColumn>
                <TableHeaderColumn style={{width: '20%'}}>
                  {'Contact Info'}
                </TableHeaderColumn>
                <TableHeaderColumn style={{width: '20%'}}>
                  {'Location'}
                </TableHeaderColumn>
                <TableHeaderColumn style={{width: '40%'}}>
                  {'License(s)'}
                </TableHeaderColumn>
              </TableRow>
            </TableHeader>
            {this._renderCustomersList(customers)}
          </Table>
        </div>
      );
    }
    return null;
  }

  _renderCustomersList(customers) {
    return (
      <TableBody displayRowCheckbox={false} showRowHover={true}>
        {this._renderListItems(customers)}
      </TableBody>
    );
  }

  _renderListItems(customers) {
    return customers.map(customer => {
      return (
        <TableRow rowNumber={customer.id} key={customer.id}>
          <TableRowColumn style={{width: '20%'}}>
            <Highlight matchElement={'span'} search={this.state.searchText}>
              {`${customer.lastName}, ${customer.firstName}`}
            </Highlight>
          </TableRowColumn>
          <TableRowColumn style={{width: '20%'}}>
            <Highlight matchElement={'span'} search={this.state.searchText}>
              {this._renderContacts(customer)}
            </Highlight>
          </TableRowColumn>
          <TableRowColumn style={{width: '20%'}}>
            {this._renderLocation(customer)}
          </TableRowColumn>
          <TableRowColumn style={{width: '40%'}}>
            {this._renderLicenses(customer.licenses)}
          </TableRowColumn>
        </TableRow>
      );
    });
  }

  render() {
    return (
      <div className="main-container">
        <Header currentUser={this.props.currentUser} />
        <div className="customer-area background-data-cover">
          <div className="row searchbox" style={styles.searchBox}>
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
                  floatingLabelText="Search for user by License #, Email Address, First Name, Last Name, City, or Phone #"
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
