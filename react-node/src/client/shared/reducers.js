import { combineReducers } from 'redux';
import usersReducer from "../reducers/usersReducer";

const reducers = combineReducers({
    usersReducer: usersReducer,
});

export default reducers;