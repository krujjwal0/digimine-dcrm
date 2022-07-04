import produce from 'immer';
import { v4 as uuidv4 } from 'uuid';
import { SET_CATEGORY, SET_ALL_DEPARTMENTS_CATEGORY, SET_SEARCH_DATA, CLEAR_SORT_SEARCH  } from './constants';

export const initialState = {
  categoryList: [],
  categoryListReplica: [],
  departmentLisInCategory: [],
  editData: {},
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
          categoryListReplica:action.payload
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
          return{
            ...state,
            categoryList : action.payload
          }
      default:
        return state;
    }
  });

export default CategoryReducer;
