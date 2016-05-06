import test from 'ava';
import { actionTest, reducerTest } from 'redux-ava';
import reducer from '../src/reducers/reducers.js';
import { receiveChocolates, addChocolate, clearItems, removeItem } from '../src/actions';

const inventory = { "chocolates" : [
  {
    "description": "Milk chocolate milder and sweeter because it is made with milk and a higher sugar content than the darker varieties. It also has a smaller quantity of chocolate liquor and, therefore, fewer flavors and aromas.",
    "id": 1,
    "type": "milk",
    "price": 1.50
  }]
}

test('It should return the initial state', t => (
    t.deepEqual(reducer(undefined, {}),
    { inventory: [],
      total: 0,
      quantity: []
    })
));

test('It allows a addChocolate action', actionTest(addChocolate, 3, {
  type: 'ADD_CHOCOLATE',
  chocolateId: 3
}));

test('It allows a remove chocolate action', actionTest(removeItem, 3, {
  type: 'REMOVE_ITEM',
  id: 3
}));

test('It allows a receive chocolates action', actionTest(receiveChocolates, inventory, {
  type: 'RECEIVE_CHOCOLATES',
  inventory: inventory
}))
