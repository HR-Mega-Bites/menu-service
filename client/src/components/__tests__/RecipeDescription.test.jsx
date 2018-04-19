import React from 'react';
import { shallow } from 'enzyme';
import RecipeDescription from '../RecipeDescription';

describe('Recipe Description Component', () => {
  it('should render component', () => {
    const component = shallow(<RecipeDescription />);
    expect(component.find('.recipe-description').length).toBe(1);
  });
});
