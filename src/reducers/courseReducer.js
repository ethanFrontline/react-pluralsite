//reducers are functions that take an action and state as arguments and return a new state
import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action){
  switch(action.type){
    case types.CREATE_COURSE:
      return [...state, //spread operators spreads the array, explodes it out and creates a new one.
        Object.assign({},action.course)
      ];

    default:
      return state;
  }
}
