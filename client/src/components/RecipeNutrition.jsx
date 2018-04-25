import React from 'react';
import PropTypes from 'prop-types';
import RecipeNutritionModal from './RecipeNutritionModal';

const RecipeNutrition = ({ calories }) => (
  <li className="list-item-info">
    <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/122214-200.png" alt="" className="list-item-icon" />
    <div className="list-item-name">nutrition</div>
    <RecipeNutritionModal calories={calories} />
  </li>
);

RecipeNutrition.propTypes = {
  calories: PropTypes.number,
};

RecipeNutrition.defaultProps = {
  calories: 404,
};

export default RecipeNutrition;
