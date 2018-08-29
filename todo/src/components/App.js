import React, { Component } from 'react';
import InputContainer from '../containers/InputContainer';
import ListContainer from '../containers/ListContainer';
import FilterContainer from '../containers/FilterContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To-Do List</h1>
        </header>
        <div className="no-print">
          <InputContainer />
        </div>
        <FilterContainer />
        <ListContainer />

      </div>
    );
  }
}

export default App;
