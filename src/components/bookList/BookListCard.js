import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import {Card, CardTitle, CardText} from 'material-ui/Card';

import {navigateTo} from '../../utils/helpers';
import bookImage from '../../static-data/images/books/bishop-area-select.jpg';

export default class BookListCard extends React.Component {
  _renderAuthor(authors) {
    let names = '';
    authors.map(author => {
      names = `${names} ${author.firstName} ${author.lastName}`;
    });
    return names;
  }

  _renderBooks(books) {
    if (books) {
      return books.map((book, index) => {
        return (
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6" key={index}>
            <Card style={styles.bookCard}>
              <div className="row">
                <div
                  className="col-xs-12 col-sm-5 col-md-5 col-lg-5"
                  style={styles.bookImage}
                  onClick={() => navigateTo('/')}
                >
                  <img src={bookImage} style={{width: '100%'}} />
                </div>
                <div
                  className="col-xs-12 col-sm-7 col-md-7 col-lg-7"
                  style={{paddingLeft: '0px'}}
                >
                  <CardTitle
                    title={book.title}
                    subtitle={this._renderAuthor(book.authors)}
                    style={{cursor: 'pointer'}}
                    onClick={() => navigateTo('/')}
                  />
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla
                    facilisi. Donec vulputate interdum sollicitudin. Nunc
                    lacinia auctor quam sed pellentesque. Aliquam dui mauris,
                    mattis quis lacus id, pellentesque lobortis odio.
                  </CardText>
                </div>
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
};
