import { combineReducers } from 'redux';
import sectionReducer from './section';

export default combineReducers({
  section: sectionReducer
})
