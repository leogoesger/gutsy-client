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

export default class RegionCard extends React.Component {
  constructor(props) {
    super(props);
  }
  _renderRegionsList(regions) {
    return (
      <TableBody displayRowCheckbox={false} showRowHover={true}>
        {this._renderListItems(regions)}
      </TableBody>
    );
  }

  _renderListItems(regions) {
    return regions.map(region => {
      return (
        <TableRow rowNumber={region.id} key={region.id}>
          <TableRowColumn style={{width: '30%'}}>
            <Highlight matchElement={'span'} search={this.props.searchText}>
              {region.name}
            </Highlight>
          </TableRowColumn>
          <TableRowColumn style={{width: '30%'}}>
            {'Bishop Town'}
          </TableRowColumn>
          <TableRowColumn style={{width: '40%'}}>
            {this._renderDescription(region)}
          </TableRowColumn>
        </TableRow>
      );
    });
  }

  _renderDescription(region) {
    if (!region.description) {
      return 'No available description';
    }
    return region.description;
  }

  _navigateToDetails(regionId) {
    navigateTo(`/regions/${regionId}`);
  }

  render() {
    if (this.props.regions && this.props.regions.length) {
      return (
        <div className="table-div" style={{width: '75%'}}>
          <Table
            selectable={false}
            fixedHeader={true}
            height={this.props.regions.length > 12 ? '560px' : null}
            onCellClick={rowNumber =>
              this._navigateToDetails(this.props.regions[rowNumber].id)}
          >
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn style={styles.tableHeaderColumn}>
                  {'Regions'}
                </TableHeaderColumn>
              </TableRow>
            </TableHeader>
            {this._renderRegionsList(this.props.regions)}
          </Table>
        </div>
      );
    }
    return null;
  }
}

RegionCard.propTypes = {
  regions: PropTypes.array,
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
