import React from 'react';
import RecipeNutritionModal from './RecipeNutritionModal';

const RecipeNutrition = () => (
  <li className="list-item-info">
    <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/122214-200.png" alt="" className="list-item-icon" />
    <div className="list-item-name">nutrition</div>
    <RecipeNutritionModal />
  </li>
);

export default RecipeNutrition;
