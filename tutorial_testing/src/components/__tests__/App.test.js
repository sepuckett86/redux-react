import React from 'react';
import { shallow } from 'enzyme';

import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

// Initialize variable outside of beforeEach function
let wrapped;

// beforeEach function
// DRY: don't repeat yourself
beforeEach(() => {
  // wrapped means additional functionality
  // included with component
  // shallow is a shallow render (no children)
  wrapped = shallow(<App />);
});

it('shows a comment box', () => {
  // matcher is toEqual
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});

// Commented out code below is enzyme-less

// import ReactDOM from 'react-dom';
/* it('shows a comment box', () => {
  // Declare a fake div for testing
  const div = document.createElement('div');

  // Render App component in div declared above
  // Does not require browser at all
  ReactDOM.render(<App />, div);

  // Tells you what is in HTML
  // console.log(div.innerHTML);

  // Look inside div to check for Comment box
  // .toContain is a matcher statement
  // .toBeTruthy is a matcher statement
  expect(div.innerHTML).toContain('Comment');



  // Clean up to improve test performance
  ReactDOM.unmountComponentAtNode(div);
});

*/
