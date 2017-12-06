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

import {navigateTo} from '../../utils/helpers';

export default class AreaCard extends React.Component {
  constructor(props) {
    super(props);
  }
  _renderAreasList(areas) {
    return (
      <TableBody displayRowCheckbox={false} showRowHover={true}>
        {this._renderListItems(areas)}
      </TableBody>
    );
  }

  _renderListItems(areas) {
    return areas.map(area => {
      return (
        <TableRow rowNumber={area.id} key={area.id}>
          <TableRowColumn style={{width: '30%'}}>
            <Highlight matchElement={'span'} search={this.props.searchText}>
              {area.name}
            </Highlight>
          </TableRowColumn>
          <TableRowColumn style={{width: '30%'}}>
            {'Bishop Town'}
          </TableRowColumn>
          <TableRowColumn style={{width: '40%'}}>
            {this._renderDescription(area)}
          </TableRowColumn>
        </TableRow>
      );
    });
  }

  _renderDescription(area) {
    if (!area.description) {
      return 'No available description';
    }
    return (
      <Highlight matchElement={'span'} search={this.props.searchText}>
        {area.description}
      </Highlight>
    );
  }

  _navigateToDetails(areaId) {
    navigateTo(`/areas/${areaId}`);
  }

  render() {
    if (this.props.areas && this.props.areas.length) {
      return (
        <div className="table-div" style={{width: '75%'}}>
          <Table
            selectable={false}
            fixedHeader={true}
            height={this.props.areas.length > 12 ? '560px' : null}
            onCellClick={rowNumber =>
              this._navigateToDetails(this.props.areas[rowNumber].id)}
          >
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn style={{width: '30%'}}>
                  {'Name'}
                </TableHeaderColumn>
                <TableHeaderColumn style={{width: '30%'}}>
                  {'Location'}
                </TableHeaderColumn>
                <TableHeaderColumn style={{width: '40%'}}>
                  {'Description'}
                </TableHeaderColumn>
              </TableRow>
            </TableHeader>
            {this._renderAreasList(this.props.areas)}
          </Table>
        </div>
      );
    }
    return null;
  }
}

AreaCard.propTypes = {
  areas: PropTypes.array,
  searchText: PropTypes.string,
};
