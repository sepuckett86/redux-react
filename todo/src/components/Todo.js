import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.name === 'check') {
      this.props.toggleCheck(this.props.id);
    }
    if (event.target.name === 'remove') {
      this.props.removeTodo(this.props.id);
    }
  }

  render() {
    let thisTodo = {}
    this.props.todo.forEach(todo => {
      if (todo.id === this.props.id) {
        thisTodo = todo;
      }
    })
    const text = thisTodo.text;
    const strike = thisTodo.strike;
    return(
      <div>
        {!strike ? text : <strike>{text}</strike>}{' '}
        <button className='no-print' name='check' onClick={this.handleClick}>
          ✔
        </button>
        {' '}
        <button className='no-print' name='remove' onClick={this.handleClick}>
          X
        </button>
      </div>
    )
  }
}

export default Todo;
