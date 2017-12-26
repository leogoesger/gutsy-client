import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';

export default class AreaCard extends React.Component {
  _handleMessageClose() {
    this.setState({showMessage: false, message: ''});
  }

  render() {
    return (
      <Paper
        className="col-lg-7 col-md-10 col-xs-12"
        style={styles.tabsCard}
        zDepth={2}
      >
        {JSON.stringify(this.props.area)}
      </Paper>
    );
  }
}

AreaCard.propTypes = {
  area: PropTypes.object,
};

const styles = {
  tabsCard: {
    margin: '0 auto',
    marginTop: '120px',
    marginBottom: '50px',
    borderRadius: '5px',
  },
};
