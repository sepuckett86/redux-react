import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

class BookList extends Component {

  renderBooks() {
      return this.props.books.map((book, i) => {
        return (
          <div key={i}>
            <h4>{book.title}</h4>
            <ul>
            {book.sections.map(section => {
              return <li key={section.id}>
                <h5>{section.title}</h5>
                <p>{section.description}</p>
              </li>
            })}
            </ul>
          </div>

        );
      })
  }
  render() {
    return (
      <div>
        <h3>My Books</h3>
        <hr />
          {this.renderBooks()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { books: state.books };
}
export default connect(mapStateToProps, actions)(BookList);
