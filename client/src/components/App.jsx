import React from 'react';
import axios from 'axios';
import { Grid, Row, Col } from 'react-bootstrap';
import RecipeTitle from './RecipeTitle';
import RecipeInfo from './RecipeInfo';
import RecipeDescription from './RecipeDescription';
import WinePairings from './WinePairings';

/* eslint-disable */
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      calories: null,
      description: 'description',
      imgurl: 'https://nerdist.com/wp-content/uploads/2017/05/spongebob-plankton-krabby-patty.jpg',
      title: 'title',
      subtitle: 'subtitle',
      servings: null,
      tags: [],
      time: 'time',
      wines: [],
    };
  }

  componentDidMount() {
    const id = window.location.pathname.split('/')[2];
    if (id) {
      axios.get(`http://localhost:3001/recipes/${id}/menu`)
        .then((res) => {
          this.setState({
            calories: res.data.calories,
            description: res.data.description,
            imgurl: res.data.imgurl,
            title: res.data.name,
            subtitle: res.data.namesub,
            servings: res.data.servings,
            tags: res.data.tags,
            time: res.data.time,
            wines: res.data.wines,
          });
        })
        .catch(err => console.log(err));
    }
  }
  
  render() {
    const renderWines = this.state.wines.length ? <WinePairings wines={this.state.wines}/> : null;
    return (
      <Grid>
        <Row>
          <Col sm={6} sm-push={6} className="recipe-right-container">{
          // eslint-disable-next-line
          }<img src={this.state.imgurl} className="recipe-image" />
          </Col>
          <Col sm={6} sm-pull={6} className="recipe-left-container">
            <RecipeTitle title={this.state.title} 
                         subtitle={this.state.subtitle} 
                         tags={this.state.tags} />
            <RecipeInfo time={this.state.time} 
                        servings={this.state.servings} 
                        calories={this.state.calories} />
            <RecipeDescription description={this.state.description} />
            {renderWines}
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
