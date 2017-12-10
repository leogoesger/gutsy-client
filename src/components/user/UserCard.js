import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';

export default class UserCard extends React.Component {
  constructor(props) {
    super(props);
  }

  _handleMessageClose() {
    this.setState({showMessage: false, message: ''});
  }

  render() {
    return (
      <Paper
        className="col-lg-7 col-md-10 col-xs-12 tabs-container"
        style={styles.tabsCard}
        zDepth={2}
      >
        {JSON.stringify(this.props.currentUser)}
      </Paper>
    );
  }
}

UserCard.propTypes = {
  currentUser: PropTypes.object,
};

const styles = {
  tabsCard: {
    margin: '0 auto',
    marginTop: '120px',
    marginBottom: '50px',
    borderRadius: '5px',
  },
};
