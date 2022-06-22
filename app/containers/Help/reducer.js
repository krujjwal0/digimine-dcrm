
import produce from 'immer';
import {
  SET_Q_A,
} from './constants';

// The initial state of the App
export const initialState = {
  help: []
};

/* eslint-disable default-case, no-param-reassign */
const helpReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_Q_A:
        return {
          ...state,
          help: action.payload
        }
      default:
        return state;
    }
  });

export default helpReducer;
