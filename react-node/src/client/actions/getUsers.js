import * as actionTypes from '../shared/actionTypes';

export function getUsers(users) {
    return{
        type: actionTypes.GET_USERS,
        payload: users,
    }
}
