import React from 'react';
import PropTypes from 'prop-types';

const RecipeTitle = ({ title, subtitle, tags }) => (
  <div className="recipe-title">
    <h1 className="recipe-title-main">{title}</h1>
    <h2 className="recipe-title-sub">{subtitle}</h2>
    <div className="tag-container">
      {tags.map(tag => <div key={tag} className="tag">{tag}</div>)}
    </div>
  </div>
);

RecipeTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};

RecipeTitle.defaultProps = {
  title: 'Default Title',
  subtitle: 'Default Description',
  tags: ['Default Tag 1, Default Tag 2'],
};

export default RecipeTitle;
