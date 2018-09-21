import React, { Component } from 'react';
import { connect } from 'react-redux';

class SectionList extends Component {
  renderSections() {
    return this.props.sections.map((section, i) => {
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
  render() {
    return (
      <div className="container">
        <h4>Section List</h4>
            <div className="list-group">
              {this.renderSections()}
            </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { sections: state.sections };
}
export default connect(mapStateToProps)(SectionList);
