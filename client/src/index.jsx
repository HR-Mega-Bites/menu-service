import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import RecipeTitle from './components/RecipeTitle';
import RecipeInfo from './components/RecipeInfo';
import RecipeDescription from './components/RecipeDescription';
import WinePairings from './components/WinePairings';

/* eslint-disable */

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      test: 'hello',
    };
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col sm={6} sm-push={6} className="recipe-right-container">
            <Image src="https://media.blueapron.com/recipes/2901/square_newsletter_images/1523553529-1-0007-7392/0423_2PM_White-Cheddar-Burgers_5941_WEB_SQ_hi_res.jpg" className="recipe-image" />
          </Col>
          <Col sm={6} sm-pull={6} className="recipe-left-container">
            <RecipeTitle />
            <RecipeInfo />
            <RecipeDescription />
            <WinePairings />
          </Col>
        </Row>
      </Grid>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
