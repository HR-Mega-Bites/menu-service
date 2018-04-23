import React from 'react';
import RecipeTime from './RecipeTime';
import RecipeServings from './RecipeServings';
import RecipeNutrition from './RecipeNutrition';

const RecipeInfo = () => (
  <div className="recipe-info">
    <RecipeTime />
    <RecipeServings />
    <RecipeNutrition />
  </div>
);

export default RecipeInfo;
