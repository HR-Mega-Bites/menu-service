import React from 'react';
import { shallow } from 'enzyme';
import RecipeTitle from '../RecipeTitle';

describe('Recipe Title Component', () => {
  it('should render component', () => {
    const component = shallow(<RecipeTitle />);
    expect(component.find('.recipe-title').length).toBe(1);
  });
});
