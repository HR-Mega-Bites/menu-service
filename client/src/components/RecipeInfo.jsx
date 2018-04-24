import React from 'react';
import PropTypes from 'prop-types';
import RecipeTime from './RecipeTime';
import RecipeServings from './RecipeServings';
import RecipeNutrition from './RecipeNutrition';

const RecipeInfo = ({ time, servings, calories }) => (
  <div className="recipe-info">
    <RecipeTime time={time} />
    <RecipeServings servings={servings} />
    <RecipeNutrition calories={calories} />
  </div>
);

RecipeInfo.propTypes = {
  time: PropTypes.string,
  servings: PropTypes.number,
  calories: PropTypes.number,
};

RecipeInfo.defaultProps = {
  time: 'Default mins',
  servings: 404,
  calories: 404,
};

export default RecipeInfo;
