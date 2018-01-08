import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {CardTitle, CardText} from 'material-ui/Card';
import Cart from 'material-ui/svg-icons/action/add-shopping-cart';

import bookImage from '../../static-data/images/books/bishop-area-select.jpg';
import {renderAuthor} from '../../utils/helpers';
import {Colors} from '../../styles/Colors';
import SignUpModal from '../../containers/SignUpModal';

export default class BookCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false,
    };
  }

  _toggleDialog() {
    this.setState({dialogOpen: !this.state.dialogOpen});
  }

  _addToCartRequest() {
    if (this.props.currentUser) {
      this.props.addToCartRequest({
        userId: this.props.currentUser.id,
        bookId: this.props.book.id,
        userBookStatusId: 2,
      });
    } else {
      this._toggleDialog();
    }
  }

  _renderBookImage() {
    return (
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 imageContainer">
        <img src={bookImage} style={{width: '100%', height: '100%'}} />
      </div>
    );
  }

  _renderAddToCartBtn(book, user) {
    if (user) {
      let bookCartedIndex = null;
      let bookPurchasedIndex = null;
      user.books.forEach((userBook, index) => {
        if (
          userBook.UserBook.userBookStatusId === 3 &&
          userBook.id === book.id
        ) {
          bookPurchasedIndex = index;
        } else if (
          userBook.UserBook.userBookStatusId === 2 &&
          userBook.id === book.id
        ) {
          bookCartedIndex = index;
        }
      });
      if (bookPurchasedIndex) {
        const date = new Date(
          user.books[bookPurchasedIndex].UserBook.createdAt
        );
        return (
          <span style={{fontSize: '14px', color: Colors.orange}}>
            {`Purchased on ${moment(date).format('MMM DD, YYYY')}!`}
          </span>
        );
      }
      if (bookCartedIndex || bookCartedIndex == 0) {
        return (
          <span style={{fontSize: '14px', color: Colors.orange}}>
            {'Added to your Cart!'}
          </span>
        );
      }
    }
    return (
      <RaisedButton
        onClick={() => this._addToCartRequest()}
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
          {this._renderAddToCartBtn(this.props.book, this.props.currentUser)}
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
        <SignUpModal
          dialogOpen={this.state.dialogOpen}
          toggleDialog={() => this._toggleDialog()}
        />
      </Paper>
    );
  }
}

BookCard.propTypes = {
  addToCartRequest: PropTypes.func,
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
  dialog: {
    backgroundColor: Colors.lightGreyPaper,
    maxHeight: '666px',
    padding: 'auto',
  },
  dialogInner: {
    width: 'auto',
    maxWidth: '560px',
    margin: '0 auto',
  },
};
