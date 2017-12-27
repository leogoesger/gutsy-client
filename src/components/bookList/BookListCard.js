import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import {Card, CardText} from 'material-ui/Card';

import {navigateTo} from '../../utils/helpers';
import bookImage from '../../static-data/images/books/bishop-area-select.jpg';

export default class BookListCard extends React.Component {
  _renderAuthor(authors) {
    let names = '';
    if (authors.length === 1) {
      return `${authors[0].firstName} ${authors[0].lastName}`;
    }
    authors.map((author, index) => {
      if (index === authors.length - 1) {
        names = `${names} ${author.firstName} ${author.lastName}`;
        return names;
      }
      names = `${names} ${author.firstName} ${author.lastName}, `;
    });
    return names;
  }

  _renderBookImage(book) {
    return (
      <div
        className="col-xs-12 col-sm-5 col-md-5 col-lg-5"
        style={styles.bookImage}
        onClick={() => navigateTo(`/books/${book.id}`)}
      >
        <img src={bookImage} style={{width: '100%'}} />
      </div>
    );
  }

  _renderBookInfo(book) {
    return (
      <div
        className="col-xs-12 col-sm-7 col-md-7 col-lg-7"
        style={{paddingLeft: '0px'}}
      >
        <div
          style={{padding: '16px 0px 0px 16px', cursor: 'pointer'}}
          onClick={() => navigateTo(`/books/${book.id}`)}
        >
          <div style={styles.title}>{book.title}</div>
          <div style={styles.subtitle}>{this._renderAuthor(book.authors)}</div>
        </div>
        <CardText>{book.description}</CardText>
      </div>
    );
  }

  _renderBooks(books) {
    if (books) {
      return books.map((book, index) => {
        return (
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6" key={index}>
            <Card style={styles.bookCard}>
              <div className="row">
                {this._renderBookImage(book)}
                {this._renderBookInfo(book)}
              </div>
            </Card>
          </div>
        );
      });
    }
    return null;
  }

  render() {
    return (
      <Paper
        className="col-lg-9 col-md-10 col-xs-12 mainPaper"
        zDepth={2}
        style={{padding: '40px'}}
      >
        <div className="row">{this._renderBooks(this.props.books)}</div>
      </Paper>
    );
  }
}

BookListCard.propTypes = {
  books: PropTypes.array,
};

const styles = {
  bookCard: {width: '100%', margin: '20px auto', height: '280px'},
  bookImage: {
    cursor: 'pointer',
    paddingLeft: '30px',
    paddingRight: '0px',
    marginTop: '20px',
  },
  title: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: '4px',
    fontSize: '12px',
    color: '#a5a5a5',
  },
};
