import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(logger)
  );
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
