import {
  GET_CATEGORY,
  SET_CATEGORY,
  ADD_CATEGORY_RULE,
  EDIT_CATEGORY_RULE,
  ADD_CATEGORY_SUB_RULE,
  EDIT_CATEGORY_SUB_RULE,
  GET_ALL_DEPARTMENTS_CATEGORY,
  SET_ALL_DEPARTMENTS_CATEGORY,
  SET_SEARCH_DATA,
  CLEAR_SORT_SEARCH
} from './constants';

export function getCategoryList() {
  console.log('categorylist:-');
  return {
    type: GET_CATEGORY,
  };
}

export function setCategoryList(obj) {
  console.log('set category list:-', obj);
  return {
    type: SET_CATEGORY,
    payload: obj,
  };
}
export function addCategoryRule(obj) {
  console.log('Add category rule:-', obj);
  return {
    type: ADD_CATEGORY_RULE,
    payload: obj,
  };
}

export function editCategoryRule(obj) {
  console.log('EDIT category rule:-', obj);
  return {
    type: EDIT_CATEGORY_RULE,
    payload: obj,
  };
}

export function addCategorySubRule(data) {
  console.log('add sub rule:-', data);
  return {
    type: ADD_CATEGORY_SUB_RULE,
    payload: data,
  };
}

export function editCategorySubRule(subrule) {
  console.log('edit sub rule:-', subrule);
  return {
    type: EDIT_CATEGORY_SUB_RULE,
    payload: subrule,
  };
}

export function getAllDepartmentInCategory() {
  console.log('Get all depts:-');
  return {
    type: GET_ALL_DEPARTMENTS_CATEGORY,
  };
}

export function setAllDepartmentInCategory(data) {
  console.log('Set all depts:-');
  return {
    type: SET_ALL_DEPARTMENTS_CATEGORY,
    payload: data,
  };
}

export function setSearchData(data) {
  return {
    type: SET_SEARCH_DATA,
    payload: data,
  };
}

export function ClearSortnSearch(data) {
  return {
    type: CLEAR_SORT_SEARCH,
    payload: data,
  };
}
