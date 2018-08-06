import React, { Component } from 'react';
import { login, logout } from '../actions/index';

class Main extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogin() {
    this.store.dispatch(login());
  }
  handleLogout() {
    this.store.dispatch(logout());
  }
  checkAuth() {
    if (this.store.getState().authenticated) {
      return (
        <p>Yes - Logged in</p>
      )
    } else {
      return (
        <p>No - Not loggen in</p>
      )
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.handleLogin}>Log In</button>
        <br />
        <button onClick={this.handleLogout}>Log Out</button>
        <br />
      {this.checkAuth()}
      </div>
    )
  }
}
export default Main;
