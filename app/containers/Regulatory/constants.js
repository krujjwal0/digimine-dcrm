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

export const GET_ASSIGNED_WORKS = 'boilerplate/Regulatory/GET_ASSIGNED_WORKS';
export const SET_ASSIGNED_WORKS = 'boilerplate/Regulatory/SET_ASSIGNED_WORKS';
export const GET_DROPDOWN_PERSON_LIST = 'boilerplate/Regulatory/GET_DROPDOWN_PERSON_LIST';
export const SET_DROPDOWN_PERSON_LIST = 'boilerplate/Regulatory/SET_DROPDOWN_PERSON_LIST';
export const SET_SUBRULES = 'boilerplate/Regulatory/SET_SUBRULES';
export const GET_ALL_DEPARTMENTS='boilerplate/Regulatory/GET_ALL_DEPARTMENTS';
export const SET_ALL_DEPARTMENTS = 'boilerplate/Regulatory/SET_ALL_DEPARTMENTS';
export const GET_RULE_AND_SUBRULE='boilerplate/Regulatory/GET_RULE_AND_SUBRULE';
export const SET_RULE_AND_SUBRULE = 'boilerplate/Regulatory/SET_RULE_AND_SUBRULE';
export const SAVE_ASSIGNED_WORK = 'boilerplate/Regulatory/SAVE_ASSIGNED_WORK';
export const SET_DATA_ASSIGN_WORK = 'boilerplate/Regulatory/SET_DATA_ASSIGN_WORK';
export const VIEW_ASSIGN_WORK = 'boilerplate/Regulatory/VIEW_ASSIGN_WORK';
export const SET_VIEW_ASSIGN_WORK = 'boilerplate/Regulatory/SET_VIEW_ASSIGN_WORK';
export const ON_RULE_CHANGE="boilerplate/Regulatory/ON_RULE_CHANGE";
export const ON_SUB_RULE_CHANGE="boilerplate/Regulatory/ON_SUB_RULE_CHANGE";

