import React from 'react';
import { shallow } from 'enzyme';
// import sinon from 'sinon';
// import App from '../App';
// import RecipeTitle from '../RecipeTitle';
// import RecipeInfo from '../RecipeInfo';
// import RecipeTime from '../RecipeTime';
// import RecipeServings from '../RecipeServings';
// import RecipeNutrition from '../RecipeNutrition';
import RecipeNutritionModal from '../RecipeNutritionModal';
// import RecipeDescription from '../RecipeDescription';
// import WinePairings from '../WinePairings';
// import Wine from '../Wine';

// -------------RECIPE NUTRTION MODAL-------------

describe('<RecipeNutritionModal />', () => {
  it('should change component state to show when calories clicked', () => {
    const wrapper = shallow(<RecipeNutritionModal />);
    wrapper.find('.modal-link').simulate('click');
    expect(wrapper.state('show')).toEqual(true);
  });
});

// describe('<WinePairings /> functions', () => {
//   it('should call handleArrowClick when wine nav arrow is clicked', () => {
//     const wrapper = shallow(<WinePairings />);
//     console.log(wrapper.props());
//     const handleClickSpy = sinon.spy(WinePairings.prototype, 'handleArrowClick');
//     wrapper.find('.recipe-wine-nav-arrow').simulate('click');
//     sinon.assert.calledOnce(handleClickSpy);
//   });
// });

// describe('<RecipeInfo />', () => {
//   test('should render RecipeTime component', () => {
//     const wrapper = shallow(<RecipeInfo />);
//     expect(wrapper.find(RecipeTime).length).toBe(1);
//   });

//   test('should render RecipeServings component', () => {
//     const wrapper = shallow(<RecipeInfo />);
//     expect(wrapper.find(RecipeServings).length).toBe(1);
//   });

//   test('should render RecipeNutrition component', () => {
//     const wrapper = shallow(<RecipeInfo />);
//     expect(wrapper.find(RecipeNutrition).length).toBe(1);
//   });
// });

// describe('<RecipeNutritionModal />', () => {
//   test('should change component state to show when calories clicked', () => {
//     const wrapper = shallow(<RecipeNutritionModal />);
//     wrapper.find('.modal-link').simulate('click');
//     expect(wrapper.state('show')).toEqual(true);
//   });
// });
