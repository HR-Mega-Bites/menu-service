import React from 'react';
import { Row, Col } from 'react-bootstrap';
import RecipeTime from './RecipeTime';
import RecipeServings from './RecipeServings';
import RecipeNutrition from './RecipeNutrition';

const RecipeInfo = () => (
  <Row className="recipe-info-container">
    <Col sm={4} sm-pull={4}>
      <RecipeTime />
    </Col>
    <Col sm={4} sm-pull={4}>
      <RecipeServings />
    </Col>
    <Col sm={4} sm-pull={4}>
      <RecipeNutrition />
    </Col>
  </Row>
);

export default RecipeInfo;
