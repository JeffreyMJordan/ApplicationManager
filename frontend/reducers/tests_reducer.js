import {merge} from "lodash";

import {RECEIVE_TEST} from "../actions/test_actions";

export default  (state={}, action) => {

  Object.freeze(state);
  console.log("here");
  let newState; 
  switch(action.type){
    case RECEIVE_TEST:
      newState = merge({}, state);
      newState[action.test.id] = action.test;
      return newState;

    default: 
      return state;
  }
};