import {merge} from "lodash";

import {RECEIVE_APPLICATION, RECEIVE_APPLICATIONS} from '../actions/application_actions';

const _nullApplication = {

};

export default (state=_nullApplication, action) => {
  Object.freeze(state);
  let newState; 
  console.log(action);
  switch(action.type){
    
    case RECEIVE_APPLICATION:
      newState = merge({}, state);
      newState[action.application.user_id] = action.application; 
      return newState;
    case RECEIVE_APPLICATIONS: 
      newState = merge({}, state);
      newState = action.applications;
      return newState;

    default: 
      return state;
  }
};