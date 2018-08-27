import React, { Component } from 'react';
import InputContainer from '../containers/InputContainer';
import ListContainer from '../containers/ListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">A simple React App using Redux for state management</h1>
        </header>
        <InputContainer />
        <ListContainer />
      </div>
    );
  }
}

export default App;
