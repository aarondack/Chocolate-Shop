import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Chocolate from '../src/components/Chocolate';

const wrapper = shallow(<Chocolate/>);

test('It should render the Chocolate component', () => {
  expect(wrapper.find(Chocolate)).to.exist;
});

test('Expect classes to be there', () => {
  expect(wrapper.find('.chocolateContainer')).to.exist;
  expect(wrapper.find('.cart')).to.exist;
  expect(wrapper.find('.price')).to.exist;
  expect(wrapper.find('.description')).to.exist;
})
