import { INCREMENT, DECREMENT, RESET } from './actions';

let initalState = {
  count: 30,
};

export const reducer = (state = initalState, action) => {
  console.log('inside reducer', state);
  if (action.type === INCREMENT) {
    return {
      count: state.count + 1,
    };
  }
  if (action.type === DECREMENT) {
    return {
      count: state.count - 1,
    };
  }
  if (action.type === RESET) {
    return {
      count: action.payload,
    };
  }
  return state;
};
