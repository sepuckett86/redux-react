import { connect } from 'react-redux';
import List from '../components/List';

const mapStateToProps = state => {
  return {
    todo: state.todo
  }
}


const ListContainer = connect(
  mapStateToProps,
  null
)(List)

export default ListContainer;
