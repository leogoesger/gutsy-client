import React from 'react';
import PropTypes from 'prop-types';

import BookListCard from './BookListCard';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <BookListCard books={this.props.books} />
      </div>
    );
  }
}

Layout.propTypes = {
  books: PropTypes.array,
};
