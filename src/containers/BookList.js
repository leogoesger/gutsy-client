import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {fetchBooks} from '../actions/book';
import Layout from '../components/bookList/Layout';

export class BookList extends React.Component {
  componentWillMount() {
    this.props.fetchBooks();
  }

  render() {
    return <Layout message={this.props.message} books={this.props.books} />;
  }
}

BookList.propTypes = {
  books: PropTypes.array,
  message: PropTypes.string,
  fetchBooks: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    books: state.book.books,
    message: state.book.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBooks: () => dispatch(fetchBooks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
