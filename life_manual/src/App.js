import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actions from './actions';

import SectionList from './SectionList';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  renderDisplay() {
    switch(this.props.display) {
      case 'clean':
        return <div></div>
      case 'newBook':
        return (
          <div>
            <SectionList />
          </div>
        )
      default:
        return <div></div>
    }
  }
  handleClick(event) {
    if (event.target.name === 'newBookButton') {
      this.props.changeDisplay('newBook');
    }
    if (event.target.name === 'viewBookButton') {
      this.props.changeDisplay('clean');
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">🌺 Life Manual</h1>
        </header>
        <div className="container center">
          <div className="button-bar">
            <button name='newBookButton' onClick={this.handleClick} className='btn btn-outline-primary'>📕 New Book</button>
            <button name='viewBookButton' onClick={this.handleClick} className='btn btn-outline-success'>📚 View Books</button>
          </div>
        </div>
        <div className="container">
          {this.renderDisplay()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { display: state.display };
}

export default connect(mapStateToProps, actions)(App);
