import { combineReducers } from 'redux';
import sectionReducer from './section';
import displayReducer from './display';

export default combineReducers({
  sections: sectionReducer,
  display: displayReducer
})
