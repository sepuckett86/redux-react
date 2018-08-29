import React, { Component } from 'react';


class Filter extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.name === 'toggle') {
      this.props.toggleVisibilityFilter();
    }
    if (event.target.name === 'clear') {
      this.props.clearChecked();
    }
  }

  render() {
    const buttonStyle = { fontSize: '16px'}
    let text = '';
    if (this.props.filter === true) {
      text = 'Show Checked'
    } else {
      text = 'Hide Checked'
    }
    return(<div>
      <button style={buttonStyle} name='toggle' className='no-print' onClick={this.handleClick}>{text}</button>
      {' '}
      <button style={buttonStyle} name='clear' className='no-print' onClick={this.handleClick}>Clear Checked</button>
    </div>)
  }
}

export default Filter;
