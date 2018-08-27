import React, { Component } from 'react';
import { login, logout, auth } from '../actions/index';

class Main extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }
  // arrow function precludes need to bind(this).
  handleLogin = () => {
    this.store.dispatch(login('You just logged in'));
  }
  handleLogout = () => {
    this.store.dispatch(logout());
  }
  handleAuth = () => {
    this.store.dispatch(auth());
  }
  checkAuth() {
    if (this.store.getState().authenticated) {
      return (
        <p>Yes - Logged in</p>
      )
    } else {
      return (
        <p>No - Not logged in</p>
      )
    }
  }
  render() {
    return (
      <div>
        <br />
        <button onClick={this.handleLogin}>Log In</button>
        <br />
        <button onClick={this.handleLogout}>Log Out</button>
        <br />
        <button onClick={this.handleAuth}>Toggle Auth</button>
        <br />
      {this.checkAuth()}
      </div>
    )
  }
}
export default Main;
