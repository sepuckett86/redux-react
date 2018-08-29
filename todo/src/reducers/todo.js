function todo(state = [], action) {
  switch(action.type){
    case 'ADDTODO':
    // source: http://www.frontcoded.com/javascript-create-unique-ids.html
      const uniqueId = function() {
        return 'id-' + Math.random().toString(36).substr(2, 16);
      };
      return [...state, {
        text: action.text,
        id: uniqueId(),
        strike: false
      }]
    case 'REMOVETODO':
      let newTodos = [];
      state.forEach(todo => {
        if(todo.id !== action.id) {
          newTodos.push(todo)
        }
      })
      return newTodos
    case 'TOGGLECHECK':
      return state.map((todo) => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, {
            strike: !todo.strike
          })
        }
        return todo
      })
    default:
      return state
  }
}

export default todo;
