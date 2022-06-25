import produce from 'immer';
import { v4 as uuidv4 } from 'uuid';
import { SET_ALL_DEPARTMENTS, SET_ALL_ROLES, SET_EMPLOYEE } from './constants';

export const initialState = {
  EmployeeCardList: [], 
  departmentList: [],
  rolesList: [],
};

/* eslint-disable default-case, no-param-reassign */
const empReducer = (state = initialState, action) =>
  produce(state, draft => {
    const { type } = action;
    // console.log('in orgchart reducer ==',action.type,action.payload.Users.map)
    switch (action.type) {
      case SET_ALL_DEPARTMENTS:
        return {
          ...state,
          departmentList: action.payload,
        };
      case SET_ALL_ROLES:
        return {
          ...state,
          rolesList: action.payload,
        };
      case SET_EMPLOYEE:
       
        console.log('in side else ==',action.payload)
        return {
          ...state,
          EmployeeCardList: action.payload,
        };

      default:
        return state;
    }
  });

export default empReducer;
