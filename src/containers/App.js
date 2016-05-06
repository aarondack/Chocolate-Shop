import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ChocolatesList from '../components/ChocolatesList';
import Cart from './Cart';
import { addChocolate, showModal } from '../actions';

class App extends Component {
    constructor() {
      super();
    }

    render() {
      const { chocolates, addChocolate, showModal } = this.props;

      return (
      <div style={{"border":"2px solid gray"}}>
        <div style={{"borderBottom":"2px solid gray"}}>
          <h1>Sugar Sweet Chocolate Treats</h1>
        </div>
      <div style={{"display":"inline-block", "paddingBottom":"30px", "paddingTop":"20px"}}>
          <ChocolatesList chocolateData={chocolates} addChocolate={addChocolate}/>
          <Cart/>
        </div>
      </div>
      );
    }
}

const mapStateToProps = (state) => {
  return {
    chocolates: state.inventory.chocolates,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addChocolate: (type) => {
      dispatch(addChocolate(type))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
