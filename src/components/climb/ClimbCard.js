import React from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import Done from 'material-ui/svg-icons/action/done';
import Add from 'material-ui/svg-icons/content/add';

import image from '../../static-data/images/seven-spanish-angles.jpeg';
import {Colors} from '../../styles/Colors';
import ClimbInfoIcons from './ClimbInfoIcons';

export default class ClimbCard extends React.Component {
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

  _renderClimbInfo() {
    if (this.props.climb) {
      const images = [{original: image}, {original: image}, {original: image}];
      return (
        <div className="row" style={styles.container}>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 imageContainer">
            <ImageGallery
              items={images}
              lazyLoad={true}
              infinite={true}
              showThumbnails={false}
              showFullscreenButton={false}
              showPlayButton={false}
              showBullets={true}
              showNav={false}
            />
          </div>
          <div className="editOnSmall col-lg-6 col-md-6 col-sm-6 col-xs-12">
            {this._renderLink(this.props.climb)}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '10px',
              }}
            >
              <div style={styles.title}>
                <div>{this.props.climb.name}</div>
                <div>{this.props.climb.grade}</div>
              </div>
              <div style={styles.climbActionIcons}>
                <Add
                  className="climbActionIcon"
                  hoverColor={Colors.orange}
                  style={{height: '30px', width: '30px'}}
                />
                <Done
                  className="climbActionIcon"
                  hoverColor={Colors.orange}
                  style={{height: '30px', width: '30px'}}
                />
              </div>
            </div>
            <ReactStars
              count={5}
              value={4.5}
              size={15}
              color2={'#ffd700'}
              edit={false}
            />

            <ClimbInfoIcons climb={this.props.climb} />
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
      <Paper className="col-lg-9 col-md-10 col-xs-12 mainPaper" zDepth={2}>
        {this._renderClimbInfo()}
      </Paper>
    );
  }
}

ClimbCard.propTypes = {
  climb: PropTypes.object,
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
    marginTop: '20px',
    marginBottom: '5px',
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
};
