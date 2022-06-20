/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';

import { HOST, BASE_PATH, SCHEMES, URL } from '../../containers/config.json';
import request from 'utils/request';
import { ADD_USER, SHOW_EMPLOYEE } from './constants';
import { setEmployee } from './actions';


function* getUsersList() {
  const requestURL = `${SCHEMES}://${BASE_PATH}${HOST}/admin/user/list`;
  const awtToken = localStorage.getItem('awtToken');
  console.log('data in saga get :', requestURL);
  let result;

  try {
    console.log('getUsersList get ');
    result = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${awtToken}`,
        'Content-Type': 'application/json',
      },
    });
    console.log('success in getUsersList saga', result);
    yield put(setEmployee(result.data));
  } catch (err) {
    console.log('Error in getUsersList saga', result, err);
    if (result) {
      alert(result.status.message);
    } else alert(err);
  }
}

function* addUserSaga(action) {
  const requestURL = `${SCHEMES}://${BASE_PATH}${HOST}/admin/user/saveOrUpdate`;
  const awtToken = localStorage.getItem('awtToken');
  console.log('data in saga get :', requestURL,action.payload);
  let result;

  try {
    console.log('addUserSaga get ');
    result = yield call(request, requestURL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${awtToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.payload)
    });
    console.log('success in addUserSaga saga', result);
    yield put(getUsersList());
  } catch (err) {
    console.log('Error in addUserSaga saga', result, err);
    if (result) {
      alert(result.status.message);
    } else alert(err);
  }
}
/**
 * Root saga manages watcher lifecycle
 */
export default function* usersData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(SHOW_EMPLOYEE, getUsersList);
  yield takeLatest(ADD_USER,addUserSaga);
}
