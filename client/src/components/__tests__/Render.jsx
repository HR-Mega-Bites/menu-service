import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import RecipeTitle from '../RecipeTitle';
import RecipeInfo from '../RecipeInfo';
import RecipeTime from '../RecipeTime';
import RecipeServings from '../RecipeServings';
import RecipeNutrition from '../RecipeNutrition';
import RecipeNutritionModal from '../RecipeNutritionModal';
import RecipeDescription from '../RecipeDescription';
import WinePairings from '../WinePairings';

describe('<App />', () => {
  it('should render RecipeTitle component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(RecipeTitle).length).toBe(1);
  });

  test('should render RecipeInfo component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(RecipeInfo).length).toBe(1);
  });

  test('should render RecipeDescription component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(RecipeDescription).length).toBe(1);
  });

  test('should render WinePairings component', () => {
    const wrapper = shallow(<WinePairings />);
    expect(wrapper.find('.recipe-wine').length).toBe(1);
  });
});

describe('<RecipeInfo />', () => {
  test('should render RecipeTime component', () => {
    const wrapper = shallow(<RecipeInfo />);
    expect(wrapper.find(RecipeTime).length).toBe(1);
  });

  test('should render RecipeServings component', () => {
    const wrapper = shallow(<RecipeInfo />);
    expect(wrapper.find(RecipeServings).length).toBe(1);
  });

  test('should render RecipeNutrition component', () => {
    const wrapper = shallow(<RecipeInfo />);
    expect(wrapper.find(RecipeNutrition).length).toBe(1);
  });
});

describe('<RecipeNutritionModal />', () => {
  test('should change component state to show when calories clicked', () => {
    const wrapper = shallow(<RecipeNutritionModal />);
    wrapper.find('.modal-link').simulate('click');
    expect(wrapper.state('show')).toEqual(true);
  });
});
