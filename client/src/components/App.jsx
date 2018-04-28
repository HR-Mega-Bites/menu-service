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
      calories: 2345,
      description: 'The Krabby Patty contains both the top bun and the bottom bun, with the top bun containing sesame seeds. It also contains sea cheese, sea lettuce, sea tomato, pickles, ketchup, mustard, mayonnaise, and sea onions, all of which can be seen when a Krabby Patty is being made (and as well correlate to the ingredients that can be found in normal burgers). As well as all of those ingredients is the patty and secret sauce, both of which have unknown ingredients, particularly the patty.',
      imgurl: 'https://nerdist.com/wp-content/uploads/2017/05/spongebob-plankton-krabby-patty.jpg',
      title: 'The Magnificent Krabby Patty',
      subtitle: 'the meat and sauce are secret!',
      servings: 1,
      tags: ['secret', 'delicious'],
      time: '2 minutes',
      wines: [],
    };
  }

  componentDidMount() {
    const id = window.location.pathname.split('/')[2];
    if (id) {
      axios.get(`http://ec2-18-188-102-66.us-east-2.compute.amazonaws.com/recipes/${id}/menu`)
        .then((res) => {
          if (res.data){
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
          }
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
