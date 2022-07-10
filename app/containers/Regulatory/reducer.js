/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { SET_ALL_DEPARTMENTS, SET_ASSIGNED_WORKS, SET_DROPDOWN_PERSON_LIST, SET_RULE_AND_SUBRULE, SET_SUBRULES } from './constants';

// The initial state of the App
export const initialState = {
  assignedWorkList: [],
  assignPersonDropdownList: [],
  reviwerDropdownList: [],
  functionalHeadDropdownList: [],
  departmentList: [],
  ruleAndSubRuleList: [],
  subRulesList:[]
};

/* eslint-disable default-case, no-param-reassign */
const regulatoryReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_SUBRULES:
        return {
          ...state,
          subRulesList: action.payload
        }
      case SET_RULE_AND_SUBRULE:
        return {
          ...state,
          ruleAndSubRuleList: action.payload
        }
      case SET_ALL_DEPARTMENTS:
        return {
          ...state,
          departmentList: action.payload,
        };
      case SET_ASSIGNED_WORKS:
        return {
          assignedWorkList: action.payload,
          ...state
        }
      case SET_DROPDOWN_PERSON_LIST:
        if (action.payload.purpose === "REVIWER") {
          return {
            reviwerDropdownList: action.payload.result,
            ...state
          }
        } else if (action.payload.purpose === "FUNCTIONAL_HEAD") {
          return {
            functionalHeadDropdownList: action.payload.result,
            ...state
          }
        } else if (action.payload.purpose === "PERSON_RESPONSIBLE") {
          return {
            assignPersonDropdownList: action.payload.result,
            ...state
          }
        }
      default:
        return state
    }
  });

export default regulatoryReducer;
