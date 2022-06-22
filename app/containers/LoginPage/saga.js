/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_REPOS } from 'containers/App/constants';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';
import { HOST, BASE_PATH, SCHEMES, URL } from '../config.json';
import {
  GENERATE_OTP,
  VALIDATE_OTP,
  GET_ADMIN_LOCATIONS,
  SIGN_IN,
  GET_FEEDBACK_FORM,
  USER_LOGOUT,
} from './constants';
import {
  setAdminLocationsAction,
  setOtpAction,
  setUsername,
  setShowOtpPage,
  signIn,
  setUserData,
  setFeedbackFormData,
  setInitialState
} from './actions';
import { makeSelectEmailId } from './selectors';

/**
 * Github repos request/response handler
 */

function* generateOtpByEmailIdSaga(action) {
  const requestURL = `${SCHEMES}://${BASE_PATH}${HOST}/generateOtpByEmailId?emailId=${action.payload}`;
  console.log(
    'data in saga generateOtpByEmailIdSaga :',
    action.payload,
    requestURL,
  );
  let result;
  try {
    console.log('generatorFunction generateOtpByEmailIdSaga ');
    result = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('success in saga', result);

    yield put(setOtpAction(result.data.otp));
    if (result.data) {
      yield put(setShowOtpPage(true));
    }
  } catch (err) {
    console.log('Error in saga', result, err);
    if (result) {
      alert(result.status.message);
    } else alert(err);
  }
}

function* validateOtpSaga(action) {
  let result;
  const validateOtpData = {
    emailId: action.payload.emailId,
    otp: action.payload.otp,
  };
  const signInData = {
    emailId: action.payload.emailId,
    password: action.payload.otp,
    deviceType: action.payload.deviceType,
    deviceToken: action.payload.deviceToken,
  };
  const requestURL = `${SCHEMES}://${BASE_PATH}${HOST}/validateOtp`;
  console.log('data in saga validateOtpSaga :', requestURL);

  try {
    console.log('generatorFunction validateOtpSaga ');
    result = yield call(request, requestURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validateOtpData),
    });
    console.log('success in saga', result, result.data);

    yield put(setUsername(result.data.userName));

    yield put(signIn(signInData));
  } catch (err) {
    if (result) {
      alert(result.status.message);
    } else alert(err);
  }
}

function* postSignIn(action) {
  const requestURL = `${SCHEMES}://${BASE_PATH}${HOST}/signIn`;
  console.log('data in saga postSignIn :', requestURL, action.payload);

  let result;
  try {
    console.log('generatorFunction postSignIn ');
    result = yield call(request, requestURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.payload),
    });
    console.log('success in saga', result, result.data);
    yield put(setUserData(result.data));


    localStorage.setItem('awtToken', result.data.awtToken);
  } catch (err) {
    if (result) {
      alert(result.status.message);
    } else alert(err);
  }
}

function* getAdminLocations(action) {
  const requestURL = `${SCHEMES}://${BASE_PATH}${HOST}/getLocations`;
  console.log('data in saga getAdminLocations :', action.payload, requestURL);
  let result;
  const awtToken = localStorage.getItem('awtToken');
  try {
    console.log('generatorFunction getAdminLocations ');
    result = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${awtToken}`,
        'Content-Type': 'application/json',
      },
    });
    console.log('success in saga', result);

    yield put(setAdminLocationsAction(result.data));
  } catch (err) {
    console.log('Error in saga', result, err);
    if (result) {
      alert(result.status.message);
    } else alert(err);
  }
}



function* getFeedbackFormSaga(action) {
  console.log('feedback form Data saga call');

  const requestURL = `${SCHEMES}://${BASE_PATH}${HOST}/getallQuestions`;
  const awtToken = localStorage.getItem('awtToken');
  // http://13.127.152.251:15000/api/getallQuestions
  try {
    const result = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${awtToken}`,
        'Content-Type': 'application/json',
      },
    });
    console.log('sucess in feedbackform saga', result);

    yield put(setFeedbackFormData(result.data.qNo));
  } catch (err) {
    console.log('this is error=', err);
  }
}

function* getUserLogout() {
  const requestURL = `${SCHEMES}://${BASE_PATH}${HOST}/userLogout`;
  console.log('data in saga getUserLogout :', requestURL);
  let result;
  const awtToken = localStorage.getItem('awtToken');
  try {
    console.log('generatorFunction getUserLogout ');
    result = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${awtToken}`,
        'Content-Type': 'application/json',
      },
    });
    console.log('success in saga', result);
    yield put(setInitialState());
    localStorage.setItem('awtToken', '');
    window. location. reload(false);
  } catch (err) {
    console.log('Error in Logging out saga', result, err);
    if (result) {
      alert(result.status.message);
    } else alert(err);
  }
}
/**
 * Root saga manages watcher lifecycle
 */
export default function* loginData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  // yield takeLatest(LOAD_REPOS, getRepos);
  yield takeLatest(GENERATE_OTP, generateOtpByEmailIdSaga);
  yield takeLatest(VALIDATE_OTP, validateOtpSaga);
  yield takeLatest(GET_ADMIN_LOCATIONS, getAdminLocations);
  yield takeLatest(SIGN_IN, postSignIn);
  yield takeLatest(GET_FEEDBACK_FORM, getFeedbackFormSaga);
  yield takeLatest(USER_LOGOUT, getUserLogout);
}
