import { connect } from 'react-redux';
import { find } from 'lodash';
import ChocolateCart from '../components/ChocolateCart';
import { clearItems, removeItem } from '../actions';

function getChocolateType(quantity, inventory) {
  let array = [];
  for (let key in quantity) {
    let chocolate = _.find(inventory, (x) => {
      return x.id == key
    })
    array.push({
      id: key,
      amount: quantity[key],
      type: chocolate.type,
      price: chocolate.price
    })
  }
  return array;
}

const mapStateToProps = (state) => {
  return {
    total: state.total,
    items: getChocolateType(state.quantity, state.inventory.chocolates)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearItems: () => {
      dispatch(clearItems())
    },
    removeChocolate: (id) => {
      dispatch(removeItem(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChocolateCart);
