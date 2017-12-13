import React from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import Paper from 'material-ui/Paper';
import ImageGallery from 'react-image-gallery';

import image from '../../static-data/images/seven-spanish-angles.jpeg';

export default class ClimbCard extends React.Component {
  constructor(props) {
    super(props);
  }

  _handleMessageClose() {
    this.setState({showMessage: false, message: ''});
  }

  _renderInfo() {
    if (this.props.climb) {
      const images = [
        {
          original: 'http://lorempixel.com/1000/600/nature/1/',
          thumbnail: 'http://lorempixel.com/250/150/nature/1/',
        },
        {
          original: 'http://lorempixel.com/1000/600/nature/2/',
          thumbnail: 'http://lorempixel.com/250/150/nature/2/',
        },
        {
          original: 'http://lorempixel.com/1000/600/nature/3/',
          thumbnail: 'http://lorempixel.com/250/150/nature/3/',
        },
      ];
      return (
        <div className="row" style={styles.container}>
          <div className="col-lg-6 col-md-6 col-xs-12" style={styles.image}>
            <img src={image} width="100%" height="100%" />
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12" style={styles.info}>
            <h2>
              {this.props.climb.name}
              <ReactStars
                count={5}
                value={4.5}
                size={24}
                color2={'#ffd700'}
                edit={false}
              />
            </h2>
          </div>
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <Paper
        className="col-lg-9 col-md-10 col-xs-12 tabs-container"
        style={styles.tabsCard}
        zDepth={2}
      >
        {this._renderInfo()}
      </Paper>
    );
  }
}

ClimbCard.propTypes = {
  climb: PropTypes.object,
};

const styles = {
  tabsCard: {
    margin: '0 auto',
    marginTop: '130px',
    marginBottom: '50px',
    borderRadius: '5px',
    padding: '60px 60px 60px 60px',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    minHeight: '300px',
  },
  image: {
    padding: '0px',
    boxShadow:
      '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
  info: {},
  refresh: {
    display: 'inline-block',
    position: 'relative',
    border: 'none',
  },
};
