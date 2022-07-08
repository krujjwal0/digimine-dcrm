import produce from 'immer';
import { v4 as uuidv4 } from 'uuid';
import { SET_CATEGORY, SET_ALL_DEPARTMENTS_CATEGORY, SET_SEARCH_DATA, CLEAR_SORT_SEARCH, SET_SUB_RULE_DETAIL } from './constants';

export const initialState = {
  categoryList: [
    {
      id: '01',
      name: "ruleA",
      departmentsId: '02',
      subRuleResponses: [
        {
          id: '0',
          name: "A(1)",
          editable: true,
          ruleId: '01'
        },
        {
          id: '1',
          name: "A(2)",
          editable: true,
          ruleId: '01'
        },
      ]
    },
    {
      id: '02',
      name: "ruleB",
      departmentsId: '03',
      subRuleResponses: [
        {
          id: '2',
          name: "B(1)",
          editable: true,
          ruleId: '02'
        },
        {
          id: '3',
          name: "B(2)",
          editable: true,
          ruleId: '02'
        },
      ]
    }
  ],
  categoryListReplica: [],
  departmentLisInCategory: [],
  editData: {},
  subRuleDetail:[]
};

/* eslint-disable default-case, no-param-reassign */
const CategoryReducer = (state = initialState, action) =>
  produce(state, draft => {
    const { type } = action;
    switch (action.type) {
      case SET_CATEGORY:
        return {
          ...state,
          categoryList: action.payload,
          categoryListReplica: action.payload
        };
      case SET_ALL_DEPARTMENTS_CATEGORY:
        return {
          ...state,
          departmentLisInCategory: action.payload,
        };
      case SET_SEARCH_DATA:
        return {
          ...state,
          categoryList: action.payload,
        };

      case CLEAR_SORT_SEARCH:
        return {
          ...state,
          categoryList: action.payload
        }
        case SET_SUB_RULE_DETAIL:
        return {
          ...state,
          subRuleDetail: action.payload
        };
      default:
        return state;
    }
  });

export default CategoryReducer;
