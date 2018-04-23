import React from 'react';

const Wine = () => (
  <div className="recipe-wine-info">
    <div className="recipe-wine-bottle">
      <img src="https://media.blueapron.com/wine/29/bottle_images/sb-highlands.png" alt="" className="wine-bottle-img" />
    </div>
    <div className="recipe-wine-text">
      <h6 className="mb-5">
        <span className="wine-text-title">Santa Barbara Highlands Vineyard</span>
        <span className="wine-text-subtitle">Grenache, 2014</span>
      </h6>
      <p className="wine-text-description">
        Big, juicy burger on the menu? Pour a big, juicy
        red and let the unrestrained deliciousness flow.
      </p>
    </div>
  </div>
);

export default Wine;
