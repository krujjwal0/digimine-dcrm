/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_REPOS } from 'containers/App/constants';
import { LOGIN, VALIDATE_OTP, GET_ADMIN_LOCATIONS,GET_FEEDBACK_FORM } from './constants';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';
import { HOST, BASE_PATH, SCHEMES, URL } from '../../containers/config.json';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';
import { setAdminLocationsAction, setOtpAction, setUsername, showSuccessPageAction, setFeedbackFormData} from './actions';
import { makeSelectEmailId } from './selectors';

/**
 * Github repos request/response handler
 */

function* generateOtpByEmailIdSaga(action) {
  // let emailId=action.payload;
  // let searchParams = new URLSearchParams({ emailId: action.payload });
  const requestURL = `${SCHEMES}://${BASE_PATH}${HOST}/generateOtpByEmailId?emailId=${action.payload}`;
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
    console.log('Error in saga', result, err);
    if (result) {
      alert(result.status.message)
    } else
      alert(err)
  }
}

// CHECK result method url and body and then yield put 
function* validateOtpSaga(action) {
  // let otp = new URLSearchParams({otp : action.payload});
  let result;
  const requestURL = `${SCHEMES}://${BASE_PATH}${HOST}/validateOtp`;
  console.log('data in saga validateOtpSaga :', requestURL);

  try {
    console.log('generatorFunction validateOtpSaga ');
    result = yield call(request, requestURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.payload)
    });
    console.log('success in saga', result, result.data);

    yield put(setUsername(result.data.userName))
    yield put(showSuccessPageAction(true))
  } catch (err) {
    if (result) {
      alert(result.status.message)
    } else
      alert(err);
  }
}

function* getAdminLocations(action) {
  const requestURL = `${SCHEMES}://${BASE_PATH}${HOST}/generateOtpByEmailId?emailId=${action.payload}`;
  console.log('data in saga getAdminLocations :', action.payload, requestURL);
  let result;
  try {
    console.log('generatorFunction getAdminLocations ');
    result = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    console.log('success in saga', result);

    // yield put(setAdminLocationsAction(result.data))
  } catch (err) {
    console.log('Error in saga', result, err);
    if (result) {
      alert(result.status.message)
    } else
      alert(err)
  }
}

function* getFeedbackFormSaga(action) {
  console.log('feedback form Data saga call');

  //  const requestURL = `${SCHEMES}://${BASE_PATH}${HOST}/getallQuestions=${action.payload}`;
  // http://13.127.152.251:15000/api/getallQuestions
  try {
    const result = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('sucess in feedbackform saga', action.payload);

    yield put(setFeedbackFormData(result));
    console.log('result saga call', result, err);
  } catch (err) {
    console.log('this is error=', err);
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
  yield takeLatest(LOGIN, generateOtpByEmailIdSaga);
  yield takeLatest(VALIDATE_OTP, validateOtpSaga);
  yield takeLatest(GET_ADMIN_LOCATIONS, getAdminLocations);
  yield takeLatest(GET_FEEDBACK_FORM, getFeedbackFormSaga );
}
