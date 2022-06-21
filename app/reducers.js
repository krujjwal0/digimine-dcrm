/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import globalReducer from 'containers/App/reducer';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import loginReducer from 'containers/LoginPage/reducer';
import helpReducer from 'containers/Help/reducer';
import empReducer from './containers/Employee/reducer';
import appReducer from 'containers/App/reducer';
import navReducer from 'components/NavBar/reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    global: globalReducer,
    language: languageProviderReducer,
    loginReducer: loginReducer,
    navReducer: navReducer,
    helpReducer: helpReducer,
    main: appReducer,
    users: empReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}
