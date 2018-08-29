import { connect } from 'react-redux';
import { toggleVisibilityFilter, clearChecked } from '../actions/index';
import Filter from '../components/Filter';

const mapStateToProps = state => {
  return {
    filter: state.visibilityFilter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleVisibilityFilter: () =>
      dispatch(toggleVisibilityFilter()),
    clearChecked: () =>
      dispatch(clearChecked())
  }
}

const FilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)

export default FilterContainer;
