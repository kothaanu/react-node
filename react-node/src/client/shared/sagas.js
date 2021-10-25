import { all } from 'redux-saga/effects';
import userSaga from "../sagas/userSaga";


export default function* sagas() {
yield all([
    userSaga(),
])
}