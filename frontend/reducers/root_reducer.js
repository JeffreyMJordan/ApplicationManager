import SessionReducer from './session_reducer';
import ApplicationsReducer from './applications_reducer';
import TestsReducer from './tests_reducer';
import {combineReducers} from "redux";

export default combineReducers({
  session: SessionReducer, 
  applications: ApplicationsReducer,
  tests: TestsReducer
});