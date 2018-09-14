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

// toEqual is matcher statement
it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

it('has a text area that users can type in', () => {
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment'}
  });
  // Because setState is asynchronous,
  // need to force a rerender before
  // we test for change
  wrapped.update();
  // Check that value property is updated correctly on change
  expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
});

it('empties text area upon form submission', () => {
  wrapped.find('form').simulate('submit');
  wrapped.update();
  expect(wrapped.find('textarea').prop('value')).toEqual('');
})
