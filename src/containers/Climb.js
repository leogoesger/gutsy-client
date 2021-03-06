import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {fetchClimb} from '../actions/climb';
import {
  userClimbActionRequest,
  resetUserClimbMessage,
} from '../actions/user-climb';
import {openDialog} from '../actions/user-account';
import Layout from '../components/climb/Layout';

export class Climb extends React.Component {
  componentWillMount() {
    this.props.fetchClimb(this.props.match.params.id);
  }

  componentWillReceiveProps(_nextProps) {
    if (this.props.match.params.id !== _nextProps.match.params.id) {
      this.props.fetchClimb(_nextProps.match.params.id);
    }
  }

  render() {
    return (
      <Layout
        message={this.props.message}
        climb={this.props.climb}
        currentUser={this.props.currentUser}
        userClimbActionRequest={userClimbData =>
          this.props.userClimbActionRequest(userClimbData)
        }
        openDialog={() => this.props.openDialog()}
        resetUserClimbMessage={() => this.props.resetUserClimbMessage()}
      />
    );
  }
}

Climb.propTypes = {
  resetUserClimbMessage: PropTypes.func,
  openDialog: PropTypes.func,
  currentUser: PropTypes.object,
  userClimbActionRequest: PropTypes.func,
  climb: PropTypes.object,
  message: PropTypes.string,
  fetchClimb: PropTypes.func,
  match: PropTypes.shape({params: PropTypes.shape({id: PropTypes.string})}),
};

const mapStateToProps = state => {
  return {
    currentUser: state.userAccount.currentUser,
    message: state.shared.message,
    climb: state.climb.climb,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    resetUserClimbMessage: () => dispatch(resetUserClimbMessage()),
    openDialog: () => dispatch(openDialog()),
    fetchClimb: climbId => dispatch(fetchClimb(climbId)),
    userClimbActionRequest: userClimbData =>
      dispatch(userClimbActionRequest(userClimbData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Climb);
