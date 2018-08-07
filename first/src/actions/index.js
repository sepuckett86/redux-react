// Declare type strings as variables here
// Will be imported by reducers/index.js
// And used in this file
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const ADDTEXT = 'ADDTEXT';

// Text is not necessary but type is.
// Set default text with text = 'LOGGED IN'
export const login = (text = 'LOGGED IN') => {
  return {
    type: LOGIN,
    text
  }
}
export const logout = (text = 'LOGGED OUT') => {
  return {
    type: LOGOUT,
    text
  }
}

export const addText = (text = '') => {
  return {
    type: ADDTEXT,
    text
  }
}
