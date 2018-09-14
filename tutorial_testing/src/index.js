import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'Root';
import App from 'components/App';

ReactDOM.render(
  // createStore(reducers, state)
  <Root>
    <App />
  </Root>,
  document.querySelector('#root')
)
