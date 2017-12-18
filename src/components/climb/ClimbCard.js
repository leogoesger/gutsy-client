import React from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router-dom';
import ImageGallery from 'react-image-gallery';

import image from '../../static-data/images/seven-spanish-angles.jpeg';

export default class ClimbCard extends React.Component {
  constructor(props) {
    super(props);
  }

  _handleMessageClose() {
    this.setState({showMessage: false, message: ''});
  }

  _renderLink(climb) {
    return (
      <span style={{fontSize: '12px'}}>
        <Link to={`/regions/${climb.subarea.area.subregion.region.id}`}>{`${
          climb.subarea.area.subregion.region.name
        }`}</Link>
        {'  >  '}
        <Link to={`/subregions/${climb.subarea.area.subregion.id}`}>{`${
          climb.subarea.area.subregion.name
        }`}</Link>
        {'  >  '}
        <Link to={`/areas/${climb.subarea.area.id}`}>{`${
          this.props.climb.subarea.area.name
        }`}</Link>
        {'  >  '}
        <Link to={`/subareas/${climb.subarea.id}`}>{`${
          this.props.climb.subarea.name
        }`}</Link>
      </span>
    );
  }

  _renderInfo() {
    if (this.props.climb) {
      const images = [{original: image}, {original: image}, {original: image}];
      return (
        <div className="row" style={styles.container}>
          <div
            className="col-lg-6 col-md-6 col-sm-6 col-xs-12"
            style={styles.image}
          >
            <ImageGallery
              items={images}
              lazyLoad={true}
              infinite={true}
              showThumbnails={false}
              showFullscreenButton={false}
              showPlayButton={false}
              showBullets={true}
            />
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-6 col-xs-12"
            style={styles.info}
          >
            {this._renderLink(this.props.climb)}

            <div style={styles.title}>
              <div>{this.props.climb.name}</div>
              <div>{this.props.climb.grade}</div>
            </div>

            <ReactStars
              count={5}
              value={4.5}
              size={24}
              color2={'#ffd700'}
              edit={false}
            />
            <h4>Description</h4>
            <p>{this.props.climb.description}</p>
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
    marginTop: '100px',
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
  info: {paddingLeft: '40px'},
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
    width: '50%',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
    border: 'none',
  },
};
