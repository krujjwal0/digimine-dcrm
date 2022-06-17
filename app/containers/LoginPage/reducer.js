/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { SET_EMAIL_ID, SET_ROLE_TYPE, SET_OTP, SET_USERNAME, SET_SUCCESS_PAGE, SET_ADMIN_LOCATIONS } from './constants';

// The initial state of the App
export const initialState = {
  ROLE_TYPE: '',
  otp: '',
  emailId: '',
  userName: '',
  showSuccessPage: false,
  adminLocations:["Mumbai","Delhi"]
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_ADMIN_LOCATIONS:
        console.log(action.payload)
        return {
          ...state,
          adminLocations: action.payload
        }
      case SET_SUCCESS_PAGE:
        console.log(action.payload)
        return {
          ...state,
          showSuccessPage: action.payload
        }
      case SET_EMAIL_ID:
        console.log(action.payload)
        return {
          ...state,
          emailId: action.payload
        }
      case SET_ROLE_TYPE:
        // Delete prefixed '@' from the github username
        return {
          ...state,
          ROLE_TYPE: action.payload
        }
      case SET_OTP:
        return {
          ...state,
          otp: action.payload
        }
      case SET_USERNAME:
        return {
          ...state,
          userName: action.payload
        }
      // case SEARCH_FILTER:
      //   console.log('inside reducer Employee data list ===', state.EmployeeData)
      //   return {
      //     ...state,
      //     EmployeeData: action.EmployeeData.filter

      //   }
      default:
        return state;
    }
  });

export default loginReducer;
