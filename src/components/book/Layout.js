import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../containers/Header';
import BookCard from './BookCard';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <BookCard
          book={this.props.book}
          currentUser={this.props.currentUser}
          addToCartRequest={userBookData =>
            this.props.addToCartRequest(userBookData)
          }
        />
      </div>
    );
  }
}

Layout.propTypes = {
  currentUser: PropTypes.object,
  book: PropTypes.object,
  addToCartRequest: PropTypes.func,
};
