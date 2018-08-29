function visibilityFilter(state = false, action) {
  switch(action.type){
    case 'TOGGLEVF':
      return !state
    default:
      return state
  }
}

export default visibilityFilter;
