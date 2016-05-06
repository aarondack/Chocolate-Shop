import React, { Component, PropTypes } from 'react';
import './ChocolateCart.css';
import Modal from '../Modal';

class ChocolateCart extends Component {
  constructor() {
    super();
    this.state = { show: false }
  }

  render() {
  const  { total, items, clearItems, removeChocolate } = this.props;
    return (
    <div className="cartContainer">
      <Modal clearItems={clearItems}>
        <h3>Your Cart</h3>
        <div>
          {items.map((data,i) => (
            <div key={i}>
              <div className="dataCart">Item: {data.type} Price: ${data.price} Qty: {data.amount}
                <button className="cartButton" onClick={() => removeChocolate(data.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
        <h3>{total == 0 ? <h3>There are no items in your cart</h3> : 'Total Price: $' + total}</h3>
      </Modal>
    </div>
    );
  }
}

ChocolateCart.propTypes = {
  total: PropTypes.number.isRequired,
  clearItems: PropTypes.func.isRequired,
  removeChocolate: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired
}
export default ChocolateCart;
