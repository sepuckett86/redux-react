import React, { Component } from 'react';
import { addText } from '../actions/index';

class Connect extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }
  // arrow function precludes need to bind(this).

  handleText = (event) => {
    const text = event.target.name;
    this.store.dispatch(addText(text))
  }

  checkText() {
    return this.store.getState().text
  }

  render() {
    return (
      <div>
      <br />
      <button name='Butterflies' onClick={this.handleText}>Beauty</button>
      <br />
      <button name='Demon' onClick={this.handleText}>Evil</button>
      <br />
      <br />
      {this.checkText()}
      </div>

    )
  }
}
export default Connect;
