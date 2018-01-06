import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import {CardTitle, CardText} from 'material-ui/Card';
import Cart from 'material-ui/svg-icons/action/add-shopping-cart';

import bookImage from '../../static-data/images/books/bishop-area-select.jpg';
import {renderAuthor} from '../../utils/helpers';
import {Colors} from '../../styles/Colors';

export default class BookCard extends React.Component {
  _renderBookImage() {
    return (
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 imageContainer">
        <img src={bookImage} style={{width: '100%', height: '100%'}} />
      </div>
    );
  }

  _renderBookInfo(book) {
    return (
      <div className="editOnSmall col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <div style={{width: '100%'}}>
          <IconButton
            tooltip="Add to cart"
            tooltipPosition="bottom-center"
            iconStyle={styles.actionIcon}
            style={styles.actionIconDiv}
          >
            <Cart className="climbActionIcon" hoverColor={Colors.orange} />
          </IconButton>
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
        {this._renderBook(this.props.book)}
      </Paper>
    );
  }
}

BookCard.propTypes = {
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
