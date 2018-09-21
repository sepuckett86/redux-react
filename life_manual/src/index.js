import React from 'react';
import ReactDOM from 'react-dom';

import Root from './Root';
import App from './App';

const initialState =
{'sections':
  [
    {
      title: 'One',
      description: 'Awesome-sauce'
    },
    {
      title: 'Two',
      description: 'Cool-beans!'
    }
  ]
}
ReactDOM.render(
  <Root initialState={initialState}>
    <App/>
  </Root>,
  document.querySelector('#root')
);
