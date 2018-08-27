import React, { Component } from 'react';

class Input extends Component {
  constructor(props){
    super(props)
    this.state = {input: ''}
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick(event) {
    this.props.addTodo(this.state.input)
    this.setState({
      input: ''
    })
  }

  handleKeyPress(event) {
  if(event.key === 'Enter'){
    this.handleClick(event)
  }
}

  render() {
    return(<div>
      <p>Enter Item</p>
      <input name="input" value={this.state.input} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
      <br />
      <button name="submitButton" onClick={this.handleClick}>Submit</button>
    </div>)
  }
}

export default Input;
