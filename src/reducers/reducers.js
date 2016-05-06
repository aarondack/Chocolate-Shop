import { find, omit } from 'lodash';

const initialState = {
  inventory: [],
  total: 0,
  quantity: [],
}

function getChocolatePrice(state, chocolateId) {
  let chocolate = _.find(state, (x) => {
    return x.id == chocolateId;
  })
  return chocolate.price;
}

function getChocolatePriceCart(state, chocolateId, key) {
  let initialValue = Object.keys(key).map(data => {
    if(data == chocolateId) {
      return key[data];
    }
  })
  const finalValue = initialValue.filter((value) => {
    return value != undefined;
  })
  let chocolateCart = _.find(state, (x) => {
    return x.id == chocolateId
  });
  return chocolateCart.price * finalValue;
}

const chocolatesApp = (state = initialState, action ) => {
  switch (action.type) {
    case 'RECEIVE_CHOCOLATES':
      return {
        ...state,
        inventory: action.inventory
      }
    case 'ADD_CHOCOLATE':
    const { chocolateId } = action
      return {
          ...state,
          total: state.total + getChocolatePrice(state.inventory.chocolates, chocolateId),
          quantity: {
            ...state.quantity,
            [chocolateId]: (state.quantity[chocolateId] || 0) + 1
          }
      }
    case 'REMOVE_ITEM':
    const { id } = action
      return {
        ...state,
        quantity: _.omit(state.quantity, [action.id]),
        total: state.total - getChocolatePriceCart(state.inventory.chocolates, action.id, state.quantity)
      }
    case 'CLEAR_ITEMS':
      return {
        ...state,
        total: 0,
        quantity: []
      }
    default:
      return state;
  }
}

export default chocolatesApp;
