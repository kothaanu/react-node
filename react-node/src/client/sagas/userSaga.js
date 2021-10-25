import {call, put, takeEvery} from 'redux-saga/effects';

const apiurl = "/api/users/";

function getApi() {
    return fetch(apiurl, {
        method: 'GET',
        headers:{'Content-Type': 'application/json',
        }
    }).then (response => response.json())
        .catch ((error) => {throw error})
}

function* fetchUsers(action) {
    try{
        const users = yield call(getApi)
        yield put({type:'GET_USERS_SUCCESS', users: users});
    }catch (e) {
        yield put({type: 'GET_USERS_ERROR', message: e.message})
    }
}

function* userSaga() {
    yield takeEvery('GET_USERS', fetchUsers);
}

export default userSaga;