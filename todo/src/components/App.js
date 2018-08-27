import React, { Component } from 'react';
import Input from './Input';
import List from './List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to my React-Redux Test App</h1>
        </header>
        <p className="App-intro">
          A simple React App with Redux for state management
        </p>
        <Input />
        <List />
        
      </div>
    );
  }
}

export default App;
