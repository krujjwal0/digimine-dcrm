
import {
  SHOW_EMPLOYEE,
  SET_EMPLOYEE,
     
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



