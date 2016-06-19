import { SAVE_COMMENT } from '../actions/types.js';

export default function(state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return state.concat(action.payload);
    default:
      return state;
  }
}
