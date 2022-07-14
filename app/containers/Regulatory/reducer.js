/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  SET_ALL_DEPARTMENTS, SET_ASSIGNED_WORKS, SET_DROPDOWN_PERSON_LIST, SET_RULE_AND_SUBRULE, SET_SUBRULES, SET_DATA_ASSIGN_WORK, SET_VIEW_ASSIGN_WORK,
  ON_RULE_CHANGE, ON_SUB_RULE_CHANGE
} from './constants';

// The initial state of the App
export const initialState = {
  assignedWorkList: [
    {
      id: 0,
      departmentName: "string",
      reviewerName: "string",
      assignedPersonId: 0,
      submit: true,
      functionalHeadName: "string",
      employeeId: 0,
      category: "string",
      assignedPersonName: "string",
      status: "notStarted"
    }
    // ,
    // {
    //   "id": 0,
    //   "departmentName": "string",
    //   "reviewerName": "string",
    //   "assignedPersonId": 0,
    //   "submit": true,
    //   "functionalHeadName": "string",
    //   "employeeId": 0,
    //   "category": "string",
    //   "assignedPersonName": "string",
    //   "status": "notStarted"
    // }
  ],
  assignPersonDropdownList: [],
  reviwerDropdownList: [],
  functionalHeadDropdownList: [],
  departmentList: [],
  ruleAndSubRuleList: [],
  ruleAndSubRuleListReplica: [],
  subRulesList: [],
  assignWorkData: {
    departmentId: 0,
    locationId: 0,
    category: "OTC",
    assignPersonId: 0,
    completionDate: "",
    reviewerId: 0,
    functionalHeadId: 0,
    pickDateFrequency: "Weekly",
    typeOfWork: "regulatory",
    rules: [

    ]
  },
  viewAssignWorkData: {}
};

/* eslint-disable default-case, no-param-reassign */
const regulatoryReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ON_RULE_CHANGE:
        console.log("ON_RULE_CHANGE", action.payload)
        const changedElementData = {
          ...state.assignWorkData,
          rules: [
            ...state.assignWorkData.rules,
            action.payload
          ]
        }

        return {
          ...state,
          assignWorkData: changedElementData
        };
      case SET_VIEW_ASSIGN_WORK:
        return {
          ...state,
          viewAssignWorkData: {
            ...action.payload
          }
        }
      case SET_DATA_ASSIGN_WORK:
        return {
          ...state,
          assignWorkData: {
            ...state.assignWorkData,
            ...action.payload
          }
        }
      case SET_SUBRULES:
        return {
          ...state,
          subRulesList: action.payload
        }
      case SET_RULE_AND_SUBRULE:
        return {
          ...state,
          ruleAndSubRuleList: action.payload,
          ruleAndSubRuleListReplica: action.payload
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
        console.log("Reducer SETDROPDOWNLIST === ", action.payload, action.payload.purpose == "FUNCTIONAL_HEAD")
        if (action.payload.purpose == "REVIWER") {
          return {
            ...state,
            reviwerDropdownList: action.payload.result
          }
        } else if (action.payload.purpose == "FUNCTIONAL_HEAD") {
          console.log("FUNCTIONAL_HEAD=====", [...action.payload.result])
          return {
            ...state,
            functionalHeadDropdownList: [...action.payload.result]

          }
        } else if (action.payload.purpose == "PERSON_RESPONSIBLE") {
          return {
            ...state,
            assignPersonDropdownList: action.payload.result

          }
        } else {
          return state
        }
      default:
        return state
    }
  });

export default regulatoryReducer;
