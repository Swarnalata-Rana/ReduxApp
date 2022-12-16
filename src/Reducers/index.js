import { combineReducers } from "redux";
import courses from './CourseReduers';
const rootReducer=combineReducers(
    {courses}
);
export default rootReducer;