/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_REPOS } from 'containers/App/constants';
import { LOGIN, VALIDATE_OTP } from './constants';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';
import { HOST, BASE_PATH, SCHEMES, URL } from '../../containers/config.json';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';
import { setOtpAction } from './actions';

/**
 * Github repos request/response handler
 */

function* generateOtpByEmailIdSaga(action) {
  // let emailId=action.payload;
  let searchParams = new URLSearchParams({emailId:action.payload});
  const requestURL = `${SCHEMES}://${BASE_PATH}${HOST}/generateOtpByEmailId?${searchParams}`;
  console.log('data in saga generateOtpByEmailIdSaga :', action.payload, requestURL);
  let result;
  try {
    console.log('generatorFunction generateOtpByEmailIdSaga ');
    result = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    console.log('success in saga', result);

    yield put(setOtpAction(result.data.otp))
  } catch (err) {
      console.log('Error in saga', result,err);
      alert(result.status.message)
  }
}

// CHECK result method url and body and then yield put 
function* validateOtpSaga(action) {
  let otp = new URLSearchParams({otp : action.payload});

  const requestURL = `${SCHEMES}://${BASE_PATH}${HOST}/validateOtp`;
  console.log('data in saga validateOtpSaga :', action.payload, requestURL);

  try {
    console.log('generatorFunction validateOtpSaga ');
    const result = yield call(request, requestURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.payload)
    });
    console.log('success in saga', result, result.data);

    // yield put(setOtpAction(result.data.otp))
  } catch (err) {
    alert(err);
  }
}


// export function* getRepos() {
//   // Select username from store
//   const username = yield select(makeSelectUsername());
//   const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

//   try {
//     // Call our request helper (see 'utils/request')
//     const repos = yield call(request, requestURL);
//     yield put(reposLoaded(repos, username));
//   } catch (err) {
//     yield put(repoLoadingError(err));
//   }
// }

/**
 * Root saga manages watcher lifecycle
 */
export default function* loginData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  // yield takeLatest(LOAD_REPOS, getRepos);
  yield takeLatest(LOGIN, generateOtpByEmailIdSaga);
  yield takeLatest(VALIDATE_OTP,validateOtpSaga);
}
