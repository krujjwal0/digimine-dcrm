/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { SET_ASSIGNED_WORKS } from './constants';

// The initial state of the App
export const initialState = {
  assignedWorkList: '',
};

/* eslint-disable default-case, no-param-reassign */
const regulatoryReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_ASSIGNED_WORKS:
        return {
          assignedWorkList: action.payload,
          ...state
        }      
      default:
        return state
    }
  });

export default regulatoryReducer;
