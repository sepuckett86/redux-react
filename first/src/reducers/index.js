// Import variables used by actions from actions file
import { LOGIN, LOGOUT, ADDTEXT } from '../actions/index';


// Declare initial state here
const initialState = {
  authenticated: false,
  text: ''
}

function myApp(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      console.log(action.text)
      return Object.assign({}, state, {
        authenticated: true
      })
    case LOGOUT:
      console.log(action.text)
      return Object.assign({}, state, {
        authenticated: false
      })
    case ADDTEXT:
      const text = action.text
      return Object.assign({}, state, {
        text: text
      })
    default:
      return state
  }
}


export default myApp
