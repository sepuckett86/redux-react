import React, { Component } from 'react';
import { connect } from 'react-redux';

class SectionList extends Component {
  state = {
    sectionsInMyBook: [],
    sectionsToAdd: this.props.sections
  }
  renderSections(name) {
    if (name === 'Sections in My Book') {
      return this.state.sectionsInMyBook.map((section, i) => {
        return (
          <a key={i} href="#" className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{section.title}</h5>
            </div>
            <p className="mb-1">{section.description}</p>
          </a>
        );
      })
    }
    if (name === 'Sections to Add') {
      return this.state.sectionsToAdd.map((section, i) => {
        return (
          <a key={i} href="#" className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{section.title}</h5>
            </div>
            <p className="mb-1">{section.description}</p>
          </a>
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
