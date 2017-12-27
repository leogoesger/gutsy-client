import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../containers/Header';
import BookCard from './BookCard';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <BookCard book={this.props.book} />
      </div>
    );
  }
}

Layout.propTypes = {
  book: PropTypes.object,
};
