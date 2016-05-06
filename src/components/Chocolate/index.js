import React, { PropTypes } from 'react';
import './Chocolate.css';

const Chocolate = ({ type, description, price, onChocolateClick }) => (
  <div className="chocolateContainer">
    <button className="cart" onClick={onChocolateClick}>Add to cart</button>
    <span>Chocolate Type: {type}</span>
    <span className="price">Price: ${price}</span>
    <div className="description">{description}</div>
  </div>
);

Chocolate.propTypes = {
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onChocolateClick: PropTypes.func.isRequired
};

export default Chocolate;
