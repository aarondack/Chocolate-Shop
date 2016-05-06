import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ChocolateCart from '../src/components/ChocolateCart';
import Modal from '../src/components/Modal';

const items = [{
  type: 'milk',
  price: 1.5,
  amount: 3
}]

test('Chocolate Cart is rendered on the page', () => {
    const wrapper = shallow(<ChocolateCart items={items}/>);
    expect(wrapper.find(ChocolateCart)).to.exist;
});

test('It should render the child component modal', () => {
  const wrapper = shallow(<ChocolateCart items={items}/>);
  expect(wrapper.find(<Modal />)).to.exist;
})
