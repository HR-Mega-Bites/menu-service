import React from 'react';
import { shallow, mount } from 'enzyme';
import RecipeInfo from '../RecipeInfo';
// import RecipeTime from '../RecipeTime';
// import RecipeServings from '../RecipeServings';
// import RecipeNutrition from '../RecipeNutrition';

describe('Recipe Info Component', () => {
  it('should render RecipeInfo component', () => {
    const wrapper = shallow(<RecipeInfo />);
    expect(wrapper.find('.recipe-info').length).toBe(1);
  });
});

describe('Recipe Info Component', () => {
  it('should render 3 RecipeInfo subcomponents', () => {
    const wrapper = mount(<RecipeInfo />);
    expect(wrapper.find('.list-item-info').length).toBe(3);
  });
});
