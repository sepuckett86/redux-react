function todo(state = [], action) {
  switch(action.type){
    case 'ADDTODO':
      return [...state, {text: action.text}]
    default:
      return state
  }
}

export default todo;
