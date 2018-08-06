import React, { Component } from 'react';
import './App.css';
import Main from './components/main';

class App extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }
  render() {
    return (
      <div className="App">
        <Main store={this.store}/>
      </div>
    );
  }
}

export default App;
