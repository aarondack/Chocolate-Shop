import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ChocolatesList from '../src/components/ChocolatesList';
import Chocolate from '../src/components/Chocolate';

const chocolateData = [{
  type: 'milk',
  description: 'tasty!',
  price: 1.5,
  key: 1
},{
  type: 'milk',
  description: 'tasty!',
  price: 1.5,
  key: 1
}]

const wrapper = shallow(<ChocolatesList chocolateData={chocolateData}/>);

test('It renders the chocolates list', () => {
  expect(wrapper.find(ChocolatesList)).to.exist;
});

test('It should render the child component chocolate', () => {
  expect(wrapper.find(<Chocolate />)).to.exist;
})

test('It should render inside a container', () => {
  expect(wrapper.find('.container')).to.have.length(1);
});
