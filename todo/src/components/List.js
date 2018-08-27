import React, { Component } from 'react';


class List extends Component {
  render() {
    const todos = this.props.todo;
    const style = { margin: '1%', padding: '1%'}
    return(<div>
      <ul style={style}>
        {todos.map(todo => {
          return <li key={todo.index}>{todo.text}</li>
        })}
      </ul>
    </div>)
  }
}

export default List;
