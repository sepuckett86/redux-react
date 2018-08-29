import React, { Component } from 'react';
import TodoContainer from '../containers/TodoContainer';


class List extends Component {
  render() {
    const todos = this.props.todo;
    const filter = this.props.filter;
    const style = { margin: '1%', padding: '1%'}
    return(<div>
      <ul style={style}>
        {!filter ?
          todos.map(todo => {
          return (
            <li key={todo.id}>
            <TodoContainer id={todo.id} />
            </li>
          )
          }) :
          todos.map(todo => {
          if (!todo.strike) {
            return (
              <li key={todo.id}>
              <TodoContainer id={todo.id} />
              </li>
            )
          }
          })}


      </ul>
    </div>)
  }
}

export default List;
