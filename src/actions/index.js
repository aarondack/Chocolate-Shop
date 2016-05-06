export const ADD_CHOCOLATE = 'ADD_CHOCOLATE';
export const RECEIVE_CHOCOLATES = 'RECEIVE_CHOCOLATES';
export const CLEAR_ITEMS = 'CLEAR_ITEMS';
export const REMOVE_ITEM = 'REMOVE_ITEM';
import inventory from '../../public/data/inventory.json';

export function getChocolates() {
  return dispatch => {
    dispatch(receiveChocolates(inventory))
  }
}

export function receiveChocolates(inventory) {
  return {
    type: RECEIVE_CHOCOLATES,
    inventory: inventory
  }
}

export function addChocolate(type) {
  return {
    type: ADD_CHOCOLATE,
    chocolateId: type,
  }
}

export function clearItems() {
  return {
    type: CLEAR_ITEMS
  }
}

export function removeItem(id) {
  return {
    type: REMOVE_ITEM,
    id: id
  }
}
