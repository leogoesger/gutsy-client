import React from 'react';
import PropTypes from 'prop-types';
import Highlight from 'react-highlighter';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import {Theme} from '../../styles/Theme';
import {navigateTo} from '../../utils/helpers';

export default class RouteCard extends React.Component {
  constructor(props) {
    super(props);
  }
  _renderRoutesList(routes) {
    return (
      <TableBody displayRowCheckbox={false} showRowHover={true}>
        {this._renderListItems(routes)}
      </TableBody>
    );
  }

  _renderListItems(routes) {
    return routes.map(route => {
      return (
        <TableRow rowNumber={route.id} key={route.id}>
          <TableRowColumn style={{width: '20%'}}>
            <Highlight matchElement={'span'} search={this.props.searchText}>
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

  _renderDescription(route) {
    if (!route.description) {
      return 'No available description';
    }
    return route.description;
  }

  _navigateToDetails(routeId) {
    navigateTo(`/routes/${routeId}`);
  }

  render() {
    if (this.props.routes && this.props.routes.length) {
      return (
        <div className="table-div" style={{width: '75%'}}>
          <Table
            selectable={false}
            fixedHeader={true}
            height={this.props.routes.length > 12 ? '560px' : null}
            onCellClick={rowNumber =>
              this._navigateToDetails(this.props.routes[rowNumber].id)}
          >
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn style={styles.tableHeaderColumn}>
                  {'Routes'}
                </TableHeaderColumn>
              </TableRow>
            </TableHeader>
            {this._renderRoutesList(this.props.routes)}
          </Table>
        </div>
      );
    }
    return null;
  }
}

RouteCard.propTypes = {
  routes: PropTypes.array,
  searchText: PropTypes.string,
};

const styles = {
  tableHeaderColumn: {
    width: '20%',
    fontWeight: Theme.light,
    fontSize: Theme.subTitle,
  },
};
