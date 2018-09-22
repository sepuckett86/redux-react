import React, { Component } from 'react';
import { connect } from 'react-redux';

class SectionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionsInMyBook: [],
      sectionsToAdd: this.props.sections
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const dataKey = event.target.getAttribute('data-key');
    // From Add list to Book list
    if (event.target.name === 'add') {
      // Define section
      const section = this.state.sectionsToAdd.filter(
        section => section.id === dataKey)[0];
      // Define new array of sectionsToAdd minus section
      const newAdd = this.state.sectionsToAdd.filter(
        section => section.id !== dataKey);
      // Define new array of sectionsInMyBook plus section
      const newMyBook = [...this.state.sectionsInMyBook, section];
      // Set new state
      this.setState({
        sectionsToAdd: newAdd,
        sectionsInMyBook: newMyBook
      });
    }
    // From Book list to Add list
    if (event.target.name === 'remove') {
      // Define section
      const section = this.state.sectionsInMyBook.filter(
        section => section.id === dataKey)[0];
      // Define new array of sectionsToAdd plus section
      const newAdd = [...this.state.sectionsToAdd, section];
      // Define new array of sectionsInMyBook minus section
      const newMyBook = this.state.sectionsInMyBook.filter(
        section => section.id !== dataKey);
      // Set new state
      this.setState({
        sectionsToAdd: newAdd,
        sectionsInMyBook: newMyBook
      });
    }
  }

  renderSections(name) {
    if (name === 'Sections in My Book') {
      return this.state.sectionsInMyBook.map((section) => {
        return (
          <button name='remove' key={section.id} data-key={section.id} onClick={this.handleClick} className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{section.title}</h5>
            </div>
            <p className="mb-1">{section.id}</p>
          </button>
        );
      })
    }
    if (name === 'Sections to Add') {
      return this.state.sectionsToAdd.map((section) => {
        return (
          <button name='add' key={section.id} data-key={section.id} onClick={this.handleClick} className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{section.title}</h5>
            </div>
            <p className="mb-1">{section.id}</p>
          </button>
        );
      })
    }

  }
  render() {
    return (
      <div>
        <h4>Sections to Add</h4>
            <div className="list-group">
              {this.renderSections('Sections to Add')}
            </div>
        <br />
        <h4>Sections in My Book</h4>
            <div className="list-group">
              {this.renderSections('Sections in My Book')}
            </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { sections: state.sections };
}
export default connect(mapStateToProps)(SectionList);
