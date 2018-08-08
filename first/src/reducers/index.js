// Import variables used by actions from actions file
import { LOGIN, LOGOUT, ADDTEXT, AUTH,
  ADDGMINDER, TOGGLEGMINDER } from '../actions/index';


// Declare initial state here
const initialState = {
  authenticated: false,
  text: '',
  gminders: [
    {
      id: 1,
      mainResponse: 'Hello There!',
      selected: false
    },
    {
      id: 2,
      mainResponse: 'I ate a burrito today.',
      selected: false
    },
  ]
}

// Have individual functions for each part of state
function authenticated(state = false, action) {
  switch(action.type) {
    case LOGIN:
      console.log(action.text)
      return true
    case LOGOUT:
    console.log(action.text)
      return false
    case AUTH:
      console.log(action.text)
      return !state
    default:
      return state
  }
}

function text(state = '', action) {
  switch(action.type) {
    case ADDTEXT:
      console.log(action.text)
      return action.text
    default:
      return state
  }
}

function gminders(state = [], action) {
  switch (action.type) {
    case ADDGMINDER:
      const id = state.length + 1;
      return [
        ...state,
        {
          id: id,
          mainResponse: action.mainResponse,
          selected: false
        }
      ]
    case TOGGLEGMINDER:
      return state.map((gminder, index) => {
        if (index === action.index) {
          return Object.assign({}, gminder, {
            selected: !gminder.selected
          })
        }
        return gminder
      })
    default:
      return state
  }
}

// Have function tying together all functions pertaining
// to parts of state
function myApp(state = initialState, action) {
  return {
    authenticated: authenticated(state.authenticated, action),
    text: text(state.text, action),
    gminders: gminders(state.gminders, action)
  }
}

// This is equivalent to the above function:
/*
import { combineReducers } from 'redux'
​
const myApp = combineReducers({
  authenticated,
  text,
  gminders
})
​
export default myApp
*/

// Export this tying-together function
export default myApp
