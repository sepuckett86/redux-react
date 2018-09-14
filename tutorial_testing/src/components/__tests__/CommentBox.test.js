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

// Group together tests with overlapping code
// with describe
describe('the text area', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment'}
    });
    // Because setState is asynchronous,
    // need to force a rerender before
    // we test for change
    wrapped.update();
  });

  it('has a text area that users can type in', () => {
    // Check that value property is updated correctly on change
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });

  it('empties text area upon form submission', () => {
    // Following line not necessary because we checked it above
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  })
});
