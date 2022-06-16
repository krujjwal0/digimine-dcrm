/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { LOGIN, SET_ROLE_TYPE, SET_OTP, VALIDATE_OTP, SIGN_IN } from './constants';

export function generateOtpByEmailIdAction(email) {
  console.log("Action login")
  return {
    type: LOGIN,
    payload: email
  };
}
export function setRoleTypeAction(roleType) {
  console.log("setRoleTypeAction", roleType)
  return {
    type: SET_ROLE_TYPE,
    payload: roleType
  }
}
export function setOtpAction(otp) {
  console.log("setOtpAction", otp)
  return {
    type: SET_OTP,
    payload: otp
  }
}
export function validateOtpAction(otp) {
  console.log("Action validateOtpAction")
  return {
    type: VALIDATE_OTP,
    payload: otp
  };
}
export function signIn(data) {
  console.log("Action signIn", data)
  return {
    type: SIGN_IN,
    payload: data
  };
}