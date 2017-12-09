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
  _navigateToDetails(climbId) {
    navigateTo(`/climbs/${climbId}`);
  }

  _renderRoutesList(climbs) {
    return (
      <TableBody displayRowCheckbox={false} showRowHover={true}>
        {this._renderListItems(climbs)}
      </TableBody>
    );
  }

  _renderListItems(climbs) {
    return climbs.map(climb => {
      return (
        <TableRow rowNumber={climb.id} key={climb.id}>
          <TableRowColumn style={{width: '25%'}}>
            <Highlight matchElement={'span'} search={this.props.searchText}>
              {`${climb.name}, `}
            </Highlight>
            <span className="grade">{climb.grade}</span>
          </TableRowColumn>
          <TableRowColumn style={{width: '35%'}}>
            {`${climb.subarea.name} < ${climb.subarea.area.name} < ${climb
              .subarea.area.subregion.name} < ${climb.subarea.area.subregion
              .region.name}`}
          </TableRowColumn>
          <TableRowColumn style={{width: '40%'}}>
            {this._renderDescription(climb)}
          </TableRowColumn>
        </TableRow>
      );
    });
  }

  _renderDescription(climb) {
    if (!climb.description) {
      return 'No available description';
    }
    return climb.description;
  }

  render() {
    if (this.props.climbs && this.props.climbs.length) {
      return (
        <div className="table-div" style={{width: '75%'}}>
          <Table
            selectable={false}
            fixedHeader={true}
            height={this.props.climbs.length > 6 ? '350px' : null}
            onCellClick={rowNumber =>
              this._navigateToDetails(this.props.climbs[rowNumber].id)}
          >
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn style={styles.tableHeaderColumn}>
                  {'Routes'}
                </TableHeaderColumn>
              </TableRow>
            </TableHeader>
            {this._renderRoutesList(this.props.climbs)}
          </Table>
        </div>
      );
    }
    return null;
  }
}

RouteCard.propTypes = {
  climbs: PropTypes.array,
  searchText: PropTypes.string,
};

const styles = {
  tableHeaderColumn: {
    height: '16px',
    width: '20%',
    fontWeight: Theme.light,
    fontSize: Theme.smallTitle,
  },
};
