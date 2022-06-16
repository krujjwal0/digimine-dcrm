/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectLogin = state => state.login || initialState;

const makeSelectRoleType = () =>
  createSelector(
    selectLogin,
    loginState => loginState.ROLE_TYPE,
  );
  const makeSelectOtp = () =>
  createSelector(
    selectLogin,
    loginState => loginState.otp,
  );

export { selectLogin, makeSelectRoleType, makeSelectOtp };
