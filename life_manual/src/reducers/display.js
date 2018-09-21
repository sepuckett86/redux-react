import { CHANGE_DISPLAY } from '../actions/types';

export default function(state = 'clean', action) {
  switch(action.type) {
    case CHANGE_DISPLAY:
      return action.payload;
    default:
      return state;
  }
}
