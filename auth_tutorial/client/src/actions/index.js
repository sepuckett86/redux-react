import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';

// Because of redux-thunk, can return a function
// instead of an object with type property
// This way, can dispatch multiple actions
// with a single action creator
export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3090/signup', formProps);

    dispatch({ type: AUTH_USER, payload: response.data.token });
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
  }
};
