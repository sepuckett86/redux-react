export const addTodo = (text) => {
  return {
    type: 'ADDTODO',
    text}
}

export const removeTodo = (id) => {
  return {
    type: 'REMOVETODO',
    id
  }
}

export const toggleCheck = (id) => {
  return {
    type: 'TOGGLECHECK',
    id
  }
}

export const toggleVisibilityFilter = () => {
  return {
    type: 'TOGGLEVF'
  }
}

export const clearChecked = () => {
  return {
    type: 'CLEARCHECKED'
  }
}
