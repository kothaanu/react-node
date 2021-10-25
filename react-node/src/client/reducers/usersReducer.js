import * as actionTypes from '../shared/actionTypes';
import {act} from "@testing-library/react";

const  initialState = {
    users:[],
    loading: false,
    error: null
}

export default function usersReducer(state=initialState, action){
    switch (action.type) {
        case actionTypes.GET_USERS:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.users
            }
        case actionTypes.GET_USERS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.message,
            }
        default:
            return state;
    }
};