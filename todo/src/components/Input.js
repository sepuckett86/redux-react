import React, { Component } from 'react';

class Input extends Component {
  constructor(props){
    super(props)
    this.state = {}
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick(event) {

  }

  render() {
    return(<div>
      <textarea name="input" onChange={this.handleChange}/>
      <button name="submitButton" onClick={this.handleClick}>Submit</button>
    </div>)
  }
}

export default Input;
