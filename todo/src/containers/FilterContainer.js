import { connect } from 'react-redux';
import { toggleVisibilityFilter } from '../actions/index';
import Filter from '../components/Filter';

const mapStateToProps = state => {
  return {
    filter: state.visibilityFilter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleVisibilityFilter: () =>
      dispatch(toggleVisibilityFilter())
  }
}

const FilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)

export default FilterContainer;
