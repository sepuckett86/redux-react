import React from 'react';
import ReactDOM from 'react-dom';

import Root from './Root';
import App from './App';

const initialState =
{'sections':
  [
    {
      title: 'One',
      description: 'Awesome-sauce',
      tags: ['source-specific'],
      examples: [''],
      id: '1'
    },
    {
      title: 'Two',
      description: 'Cool-beans!',
      id: '2'
    },
    {
      title: 'Three',
      description: 'Neato',
      id: '3'
    }
  ]
}
ReactDOM.render(
  <Root initialState={initialState}>
    <App/>
  </Root>,
  document.querySelector('#root')
);
