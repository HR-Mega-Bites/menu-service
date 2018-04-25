import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import RecipeTitle from '../RecipeTitle';
import RecipeInfo from '../RecipeInfo';
import RecipeTime from '../RecipeTime';
import RecipeServings from '../RecipeServings';
import RecipeNutrition from '../RecipeNutrition';
import RecipeDescription from '../RecipeDescription';
import WinePairings from '../WinePairings';
// import Wine from '../Wine';

// THIS FILE TESTS IF ALL COMPONENTS RENDER PROPERLY

// -------------MAIN APP COMPONENTS-------------

describe('<App />', () => {
  it('should render RecipeTitle component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(RecipeTitle).length).toBe(1);
  });

  it('should render RecipeInfo component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(RecipeInfo).length).toBe(1);
  });

  it('should render RecipeDescription component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(RecipeDescription).length).toBe(1);
  });

  it('should render WinePairings component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(WinePairings).length).toBe(1);
  });
});

// -------------RECIPE INFO COMPONENTS-------------

describe('<RecipeInfo />', () => {
  it('should render RecipeTime component', () => {
    const wrapper = shallow(<RecipeInfo />);
    expect(wrapper.find(RecipeTime).length).toBe(1);
  });

  it('should render RecipeServings component', () => {
    const wrapper = shallow(<RecipeInfo />);
    expect(wrapper.find(RecipeServings).length).toBe(1);
  });

  it('should render RecipeNutrition component', () => {
    const wrapper = shallow(<RecipeInfo />);
    expect(wrapper.find(RecipeNutrition).length).toBe(1);
  });
});

// -------------WINEPAIRINGS COMPONENT-------------

// describe('<WinePairings />', () => {
//   it('should render Wine components', () => {
//     const wrapper = shallow(<WinePairings />);
//     expect(wrapper.find(Wine).length).toBeGreaterThan(0);
//   });
// });
