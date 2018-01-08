import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {fetchBook} from '../actions/book';
import {addToCartRequest} from '../actions/user-book';
import Layout from '../components/book/Layout';

export class Book extends React.Component {
  componentWillMount() {
    this.props.fetchBook(this.props.match.params.id);
  }

  componentWillReceiveProps(_nextProps) {
    if (this.props.match.params.id !== _nextProps.match.params.id) {
      this.props.fetchBook(_nextProps.match.params.id);
    }
  }

  render() {
    return (
      <Layout
        message={this.props.message}
        book={this.props.book}
        currentUser={this.props.currentUser}
        addToCartRequest={userBookData =>
          this.props.addToCartRequest(userBookData)
        }
      />
    );
  }
}

Book.propTypes = {
  book: PropTypes.object,
  currentUser: PropTypes.object,
  message: PropTypes.string,
  fetchBook: PropTypes.func,
  addToCartRequest: PropTypes.func,
  match: PropTypes.shape({params: PropTypes.shape({id: PropTypes.string})}),
};

const mapStateToProps = state => {
  return {
    currentUser: state.userAccount.currentUser,
    book: state.book.book,
    message: state.book.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBook: climbId => dispatch(fetchBook(climbId)),
    addToCartRequest: userBookData => dispatch(addToCartRequest(userBookData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);
