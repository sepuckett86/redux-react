import { combineReducers } from 'redux';
import sectionReducer from './section';
import displayReducer from './display';
import bookReducer from './book';

export default combineReducers({
  sections: sectionReducer,
  display: displayReducer,
  book: bookReducer
})
