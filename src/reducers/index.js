import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  courses //from within a component, this is how you would access this data => state.courses. this is also shorthand object notation in ES6 since the key and value are the same. It's the same as courses: courses. this is an object. it's called shorthand property names
});

export default rootReducer;
