import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line
const Wine = ({ title, subtitle, description, imgurl }) => (
  <div className="recipe-wine-info">
    <div className="recipe-wine-bottle">
      <img src={imgurl} alt="" className="wine-bottle-img" />
    </div>
    <div className="recipe-wine-text">
      <h6 className="mb-5">
        <span className="wine-text-title">{title}</span>
        <span className="wine-text-subtitle">{subtitle}</span>
      </h6>
      <p className="wine-text-description">{description}</p>
    </div>
  </div>
);

Wine.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  imgurl: PropTypes.string,
};

Wine.defaultProps = {
  title: 'Default title',
  subtitle: 'Default subtitle',
  description: 'Default description',
  imgurl: 'https://media.blueapron.com/wine/29/bottle_images/sb-highlands.png',
};

export default Wine;
