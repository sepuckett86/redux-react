import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actions from './actions';

import Home from './Home';
import SectionList from './SectionList';
import BookList from './BookList';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  renderDisplay() {
    switch(this.props.display) {
      case 'clean':
        return <div><Home /></div>
      case 'newBook':
        return (
          <div>
            <SectionList />
          </div>
        )
      case 'viewBooks':
        return (
          <div>
            <BookList />
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
      this.props.changeDisplay('viewBooks');
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button type="button" className='btn btn-clean'>
            <h1 className="App-title">
              <span role="img" aria-label="jsx-a11y/accessible-emoji">🌺</span> Life Manual
            </h1>
          </button>
        </header>
        <div className="container center">
          <div className="button-bar">
            <button name='newBookButton' onClick={this.handleClick} className='btn btn-outline-primary'>
              <span role="img" aria-label="jsx-a11y/accessible-emoji">📕</span> New Book</button>
            <button name='viewBookButton' onClick={this.handleClick} className='btn btn-outline-success'>
              <span role="img" aria-label="jsx-a11y/accessible-emoji">📚</span> View Books</button>
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
