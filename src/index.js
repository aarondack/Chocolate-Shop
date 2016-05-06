import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import { getChocolates } from './actions';
import configureStore from './store/configureStore';

const store = configureStore();
store.dispatch(getChocolates());

render (
  <Provider store={store}>
    <App/>
  </Provider>,
    document.getElementById('app')
);
