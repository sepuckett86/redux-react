import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import Reducers from './reducers'
import registerServiceWorker from './registerServiceWorker';

let store = createStore(Reducers);

function render() {
ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root'));
}

store.subscribe(render);
render();
