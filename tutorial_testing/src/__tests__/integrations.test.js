import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';
import { MemoryRouter } from 'react-router-dom';

let wrapped;

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
  wrapped = mount(
    <Root initialState = {{ auth: true }}>
      <MemoryRouter initialEntries={[ '/post' ]}>
        <App />
      </MemoryRouter>
    </Root>);
  // Find fetch button and click it
  wrapped.find('.fetch-comments').simulate('click');
  // Introduce a tiny pause
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find('li').length).toEqual(2);

    // Done tells Jest to not say ok until this done() is done
    done();
    // Include unmount() in wait method
    wrapped.unmount();
  });

});
