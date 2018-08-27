function todo(state = [], action) {
  switch(action.type){
    case 'ADDTODO':
      const index = state.length + 1;
      return [...state, {
        text: action.text,
        index: index
      }]
    default:
      return state
  }
}

export default todo;
