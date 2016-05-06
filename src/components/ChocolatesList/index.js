import React, { PropTypes } from 'react';
import Chocolate from '../Chocolate';
import './ChocolatesList.css';

const ChocolatesList = ({ chocolateData, addChocolate }) => (
  <div className="container">
    {chocolateData.map(data => (
      <Chocolate
        key={data.id}
        type={data.type}
        description={data.description}
        price={data.price}
        onChocolateClick={() => addChocolate(data.id)}
      />
    ))}
  </div>
);

ChocolatesList.propTypes = {
  addChocolate: PropTypes.func.isRequired,
  chocolateData: PropTypes.array.isRequired
};

export default ChocolatesList;
