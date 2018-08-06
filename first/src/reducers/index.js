const initialState = {
  authenticated: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      console.log("You just logged in!")
      return Object.assign({}, state, {
        authenticated: true
      })
    case 'LOGOUT':
      console.log("You just logged out!")
      return Object.assign({}, state, {
        authenticated: false
      })
    default:
      return state
  }
}
