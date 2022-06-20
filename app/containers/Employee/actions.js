
import {
  SHOW_EMPLOYEE,
  SET_EMPLOYEE,
  ADD_USER
} from './constants';

export function showEmployee(obj) {
  console.log("employeeList added:-", obj)
  return {
    type: SHOW_EMPLOYEE,
    payload : obj,
  };
}

  export function setEmployee(obj) {
    console.log("employeeList added:-", obj)
    return {
      type: SET_EMPLOYEE,
      payload : obj,
    };
}
export function addUser(obj) {
  console.log("Add User:-", obj)
  return {
    type: ADD_USER,
    payload : obj,
  };
}




