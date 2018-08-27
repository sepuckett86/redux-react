import { connect } from 'react-redux';
import { addTodo } from '../actions/index';
import Input from '../components/Input';

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (text) =>
      dispatch(addTodo(text))
  }
}

const InputContainer = connect(
  null,
  mapDispatchToProps
)(Input)

export default InputContainer;
