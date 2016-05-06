import { createStore, compose, applyMiddleware } from 'redux';
import chocolatesApp from '../reducers/reducers.js';
import thunk from 'redux-thunk';

const configureStore = (initialState) => {
  const configStore = compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : dev => dev
      )(createStore);

    const store = configStore(chocolatesApp, initialState);
    return store;
}

export default configureStore;
