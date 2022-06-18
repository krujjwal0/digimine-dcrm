/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOGIN = 'digimine/LoginPage/LOGIN';
export const SET_ROLE_TYPE = 'digimine/LoginPage/SET_ROLE_TYPE';
export const SET_OTP = 'digimine/LoginPage/SET_OTP';
export const VALIDATE_OTP = 'digimine/LoginPage/VALIDATE_OTP';
export const SIGN_IN = 'digimine/LoginPage/SIGN_IN';
export const SET_EMAIL_ID = 'digimine/LoginPage/SET_EMAIL_ID';
export const SET_USERNAME = 'digimine/LoginPage/SET_USERNAME';
export const SET_SUCCESS_PAGE = 'digimine/LoginPage/SET_SUCCESS_PAGE';
export const GET_ADMIN_LOCATIONS = 'digimine/LoginPage/GET_ADMIN_LOCATIONS';
export const SET_ADMIN_LOCATIONS = 'digimine/LoginPage/SET_ADMIN_LOCATIONS';
export const GET_FEEDBACK_FORM = 'GET_FEEDBACK_FORM';
export const SET_FEEDBACK_FORM = 'SET_FEEDBACK_FORM';
export const SAVE_FEEDBACK_FORM_DATA = 'SAVE_FEEDBACK_FORM_DATA';
export const SET_SHOW_FEEDBACK_FORM_DATA = 'SET_SHOW_FEEDBACK_FORM_DATA';


