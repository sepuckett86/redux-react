import { connect } from 'react-redux';
import { removeTodo } from '../actions/index';
import List from '../components/List';

const mapStateToProps = state => {
  return {
    todo: state.todo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeTodo: (index) => {
      dispatch(removeTodo(index))
    }
  }
}

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default ListContainer;
