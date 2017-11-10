import * as types from './actionTypes';

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course}; //in ES6, if the key and value are the same, you can omit the colon and value. this is identical to 'course: course'
}
