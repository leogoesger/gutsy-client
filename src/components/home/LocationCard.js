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

export default class LocationCard extends React.Component {
  constructor(props) {
    super(props);
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

  _renderDescription(location) {
    if (!location.description) {
      return 'No available description';
    }
    return location.description;
  }

  _renderLocation(location) {
    if (location.area) {
      return `${location.area.name} < ${location.area.subregion.name} < ${
        location.area.subregion.region.name
      }`;
    } else if (location.subregion) {
      return `${location.subregion.name} < ${location.subregion.region.name}`;
    } else if (location.region) {
      return `${location.region.name}`;
    }
    return location.name;
  }

  _renderListItems(locations) {
    return locations.map((location, index) => {
      return (
        <TableRow rowNumber={index} key={index}>
          <TableRowColumn style={{width: '25%'}}>
            <Highlight matchElement={'span'} search={this.props.searchText}>
              {location.name}
            </Highlight>
          </TableRowColumn>
          <TableRowColumn style={{width: '35%'}}>
            {this._renderLocation(location)}
          </TableRowColumn>
          <TableRowColumn style={{width: '40%'}}>
            {this._renderDescription(location)}
          </TableRowColumn>
        </TableRow>
      );
    });
  }

  _renderLocationsList(locations) {
    return (
      <TableBody displayRowCheckbox={false} showRowHover={true}>
        {this._renderListItems(locations)}
      </TableBody>
    );
  }

  render() {
    if (this.props.locations && this.props.locations.length) {
      return (
        <div className="table-div" style={{width: '75%'}}>
          <Table
            selectable={false}
            fixedHeader={true}
            height={this.props.locations.length > 6 ? '350px' : null}
            onCellClick={rowNumber =>
              this._navigateToDetails(this.props.locations[rowNumber])
            }
          >
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn style={styles.tableHeaderColumn}>
                  {'Locations'}
                </TableHeaderColumn>
              </TableRow>
            </TableHeader>
            {this._renderLocationsList(this.props.locations)}
          </Table>
        </div>
      );
    }
    return null;
  }
}

LocationCard.propTypes = {
  locations: PropTypes.array,
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
