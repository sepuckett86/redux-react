import { SAVE_SECTION } from '../actions/types';

export default function(state = [], action) {
  switch(action.type) {
    case SAVE_SECTION:
      return [...state, action.payload];
    default:
      return state;
  }
}
