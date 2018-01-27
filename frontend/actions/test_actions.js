import * as TestAPIUtil from '../util/test_api_util';
import { receiveApplication } from './application_actions';

export const RECEIVE_TEST = "RECEIVE_TEST";

export const receiveTest = (test) => {
  console.log(test);
  return {
    type: RECEIVE_TEST,
    test
  };
};

export const createTest = (test) => (dispatch) => {
  return TestAPIUtil.createTest(test)
    .then((res) => dispatch(receiveTest(res)));
};

export const showTest = (id) => (dispatch) => {
  return TestAPIUtil.showTest(id)
    .then((res) => dispatch(receiveTest(res)));
};