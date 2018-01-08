import React from 'react';
import PropTypes from 'prop-types';

import BookCard from './BookCard';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <BookCard
          book={this.props.book}
          currentUser={this.props.currentUser}
          addToCartRequest={userBookData =>
            this.props.addToCartRequest(userBookData)
          }
          path={this.props.path}
          openDialog={() => this.props.openDialog()}
        />
      </div>
    );
  }
}

Layout.propTypes = {
  openDialog: PropTypes.func,
  path: PropTypes.object,
  currentUser: PropTypes.object,
  book: PropTypes.object,
  addToCartRequest: PropTypes.func,
};
