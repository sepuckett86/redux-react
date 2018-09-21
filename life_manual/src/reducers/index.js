import { combineReducers } from 'redux';
import sectionReducer from './section';

export default combineReducers({
  sections: sectionReducer
})
