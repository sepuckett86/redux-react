// Declare type strings as variables here
// Will be imported by reducers/index.js
// And used in this file
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const AUTH = 'AUTH';
export const ADDTEXT = 'ADDTEXT';
export const ADDGMINDER = 'ADDGMINDER';
export const TOGGLEGMINDER = 'TOGGLEGMINDER';


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
export const auth = (text = 'toggle auth') => {
  return {
    type: AUTH,
    text
  }
}
export const addText = (text = '') => {
  return {
    type: ADDTEXT,
    text
  }
}
export const addGminder = (mainResponse = '') => {
  return {
    type: ADDGMINDER,
    mainResponse
  }
}
export const toggleGminder = () => {
  return {
    type: TOGGLEGMINDER
  }
}
