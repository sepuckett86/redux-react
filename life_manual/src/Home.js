import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    return (
      <div>
        <h3>Mission Statement</h3>
        <hr />
        <p>I am creating a web-app to make a life manual. </p>
        <p>This is a book one writes about themselves that talks about what is important. We spend so much time being influenced by others but what if we could be influenced by ourselves? This is one way to do so. </p>
        <p>Note: each of these sections could be an App in itself. Potential for expansion.</p>
      </div>
    );
  }
}

export default Home;
