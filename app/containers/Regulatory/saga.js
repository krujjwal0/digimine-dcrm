/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';
import { GET_ASSIGNED_WORKS } from './constants';
import { HOST, BASE_PATH, SCHEMES, URL } from '../config.json';
import { setAssignedWorks } from './actions';

export function* getAssignedWorkSaga() {
  const requestURL = `${SCHEMES}://${BASE_PATH}${HOST}/getAssignedWorks`;
  console.log(' getAssignedWorkSaga URL:', requestURL);
  const awtToken = localStorage.getItem('awtToken');
  let result;
  try {
    console.log('generatorFunction getAssignedWorkSaga ');
    result = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${awtToken}`,
        'Content-Type': 'application/json',
      }
    });
    yield put(setAssignedWorks(result.data.assignedWork));
    console.log('getAssignedWorkSaga success in saga', result, result.data,result.data.assignedWork);
  } catch (err) {
    if (err.response.status == 401) {
      console.log(" Unauthorised access");
      //call silentRenewal with refresh token
      yield put(silentRenewalAction());
    } else if (result) {
      console.log('Error while saving profile', result);
      // console.log(result.status.message);
    } else console.log('Error while saving profile', err);
  }
}


export default function* regulatoryData() {
  yield takeLatest(GET_ASSIGNED_WORKS, getAssignedWorkSaga);
}
