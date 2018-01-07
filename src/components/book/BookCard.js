import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import {CardTitle, CardText} from 'material-ui/Card';
import Cart from 'material-ui/svg-icons/action/add-shopping-cart';

import RaisedButton from 'material-ui/RaisedButton';

import bookImage from '../../static-data/images/books/bishop-area-select.jpg';
import {renderAuthor} from '../../utils/helpers';

export default class BookCard extends React.Component {
  _renderBookImage() {
    return (
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 imageContainer">
        <img src={bookImage} style={{width: '100%', height: '100%'}} />
      </div>
    );
  }

  _renderAddToCardBtn(book, user) {
    if (user) {
      let userBookIndex = null;
      user.books.forEach((userBook, index) => {
        if (
          userBook.UserBook.userBookStatusId === 2 &&
          userBook.id === book.id
        ) {
          userBookIndex = index;
        }
      });
      if (userBookIndex) {
        const date = new Date(user.books[userBookIndex].UserBook.createdAt);
        return `Purchased on ${date.getMonth() +
          1}-${date.getDate()}-${date.getYear() - 100 + 2000}`;
      }
    }
    return (
      <RaisedButton
        onClick={() => console.log('clicking buttons')}
        target="_blank"
        backgroundColor="#F0C463"
        label="Add To Cart"
        icon={<Cart />}
      />
    );
  }

  _renderBookInfo(book) {
    return (
      <div className="editOnSmall col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
          {this._renderAddToCardBtn(this.props.book, this.props.currentUser)}
        </div>
        <CardTitle title={book.title} subtitle={renderAuthor(book.authors)} />
        <CardText>{book.description}</CardText>
      </div>
    );
  }

  _renderBook(book) {
    if (book) {
      return (
        <div className="row" style={styles.container}>
          {this._renderBookImage()}
          {this._renderBookInfo(book)}
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <Paper className="col-lg-9 col-md-10 col-xs-12 mainPaper" zDepth={2}>
        {this._renderBook(this.props.book, this.props.currentUser)}
      </Paper>
    );
  }
}

BookCard.propTypes = {
  currentUser: PropTypes.object,
  book: PropTypes.object,
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    minHeight: '300px',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '50%',
    fontWeight: 'bold',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
    border: 'none',
  },
  climbActionIcons: {
    marginTop: '10px',
    width: '80px',
    display: 'flex',
    justifyContent: 'space-around',
  },
  actionIcon: {
    width: '26px',
    height: '26px',
    padding: '2px',
  },
  actionIconDiv: {
    padding: '0px',
    width: '26px',
    height: '26px',
  },
};
