import React from 'react';

/* eslint-disable */
const RecipeDescription = ({description}) => (
  <div className="recipe-description">
    <p>
      {description}
    </p>
    <a className="get-cooking-btn" name="button" href="#">Get Cooking</a>
  </div>
);

export default RecipeDescription;
