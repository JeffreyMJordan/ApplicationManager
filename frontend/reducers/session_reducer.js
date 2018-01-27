import {merge} from "lodash";

import {RECEIVE_CURRENT_USER} from '../actions/session_actions';

const _nullUser = {
  currentUser: {id: null, username: null}
};

export default (state=_nullUser, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type){
    case RECEIVE_CURRENT_USER:
      newState = merge({}, {currentUser: action.currentUser});
      return newState;

    default: 
      return state;
  }
};