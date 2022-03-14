import {all} from 'redux-saga/effects';
import { INCREMENT, DECREMENT } from '../actions/typeDefine';
import { watchDecrement, watchIncrement } from './counter';

export default function* rootSaga() {
    yield all([
        watchIncrement,
        watchDecrement
    ])
}