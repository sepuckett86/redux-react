import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('shows a comment box', () => {
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
