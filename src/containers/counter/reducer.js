import { Map } from 'immutable';
import { INCREMENT, DECREMENT, RESET } from './actions';

export const counterReducer = (state = Map({ counter: 0 }), action) => {
  switch (action.type) {
    case INCREMENT:
      return state.update('counter', value => value + 1);
    case DECREMENT:
      return state.update('counter', value => value - 1);
    case RESET:
      return state.update('counter', () => 0);
    default:
      return state;
  }
};
