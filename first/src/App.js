import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
import Connect from './components/connect';

class App extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }
  render() {
    return (
      <div className="App">
        <Main store={this.store}/>
        <Connect store={this.store} />
      </div>
    );
  }
}

export default App;
