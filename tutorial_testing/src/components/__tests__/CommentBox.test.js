import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';

let wrapped;

// Could also use shallow in this case
// Pass beforeEach an arrow function
beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

// Component clean up when using mount
afterEach(() => {
  wrapped.unmount();
})

it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});
