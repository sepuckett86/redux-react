import { connect } from 'react-redux';
import { toggleCheck, removeTodo } from '../actions/index';
import Todo from '../components/Todo';

const mapStateToProps = state => {
  return {
    todo: state.todo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleCheck: (id) =>
      dispatch(toggleCheck(id)),
    removeTodo: (id) => {
        dispatch(removeTodo(id))
      }
  }
}

const TodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)

export default TodoContainer;
