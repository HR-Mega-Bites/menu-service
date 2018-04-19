import React from 'react';
import { shallow } from 'enzyme';
import RecipeTitle from '../client/src/components/RecipeTitle';

describe('Recipe Title Component', () => {
  it('should render component', () => {
    const component = shallow(<App />);
    expect(component.find('.recipe-title').toHaveLength(1));
  })
});